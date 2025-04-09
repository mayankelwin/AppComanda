import { useEffect, useMemo, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTables } from "../../store/tableSlice";
import { RootState } from "../../store";
import { Table } from "../../types/Table";

type FiltroStatus = "Visão Geral" | "Em Atendimento" | "Disponível" | "Ociosas" | "Sem Pedidos";

const TEMPO_OCIOSO_LIMITE = 15;
const PAGE_SIZE = 20;

export function useMapServiceController() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<FiltroStatus>("Visão Geral");
  const [renderedTables, setRenderedTables] = useState<Table[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  const { tables: tablesRedux, loading, error } = useSelector((state: RootState) => state.table);

  // Fetch inicial
  const fetchData = useCallback(async () => {
    setIsLoading(true);
    await dispatch(fetchTables() as any);
    setIsLoading(false);
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Normaliza os dados da API
  const normalizedTables = useMemo<Table[]>(() => {
    if (!Array.isArray(tablesRedux)) return [];

    return tablesRedux.map((table) => {
      const firstCommand = table.orderSheets?.[0];
      const hasCommandOpen = table.orderSheets && table.orderSheets.length > 0;
      const timeIdle = Number(firstCommand?.idleTime ?? 0);
      const subtotal = firstCommand?.subtotal ?? 0;

      let status: Table["status"];

      if (!hasCommandOpen && table.activity === "empty") {
        status = "Disponível";
      } else if (hasCommandOpen && subtotal === 0) {
        status = "Sem Pedidos";
      } else if (hasCommandOpen && subtotal > 0 && timeIdle > TEMPO_OCIOSO_LIMITE) {
        status = "Ociosas";
      } else if (hasCommandOpen && subtotal > 0 && timeIdle <= TEMPO_OCIOSO_LIMITE) {
        status = "Em Atendimento";
      } else {
        status = "Desconhecido";
      }

      return {
        ...table,
        status,
        isOciosa: status === "Ociosas",
        hasCommandOpen,
        subtotal,
        timeIdle,
      };
    });
  }, [tablesRedux]);

  // Aplica filtro e busca
  const filteredTables = useMemo(() => {
    let result = normalizedTables;

    if (selectedFilter !== "Visão Geral") {
      result = result.filter((table) => table.status === selectedFilter);
    }

    if (searchTerm.trim().length === 0) return result;

    const lowerSearch = searchTerm.toLowerCase();

    return result.filter((table) => {
      const titleMatch = table.title?.toLowerCase().includes(lowerSearch);
      const nameMatch = table.orderSheets?.[0]?.customerName?.toLowerCase().includes(lowerSearch);
      return titleMatch || nameMatch;
    });
  }, [normalizedTables, selectedFilter, searchTerm]);

  // Reset paginado sempre que filtro ou busca mudar
  useEffect(() => {
    const initial = filteredTables.slice(0, PAGE_SIZE);
    setRenderedTables(initial);
    setCurrentIndex(PAGE_SIZE);
  }, [filteredTables]);

  // Carrega mais resultados ao scrollar
  const loadMoreTables = useCallback(() => {
    const nextBatch = filteredTables.slice(
      renderedTables.length,
      renderedTables.length + PAGE_SIZE
    );

    const insertData = (data: Table[]) => {
      setRenderedTables((prev) => [...prev, ...data]);
    };

    if (nextBatch.length > 0) {
      if ("requestIdleCallback" in window) {
        requestIdleCallback(() => insertData(nextBatch));
      } else {
        setTimeout(() => insertData(nextBatch), 300);
      }
    } else if (
      (selectedFilter === "Disponível" || selectedFilter === "Visão Geral") &&
      searchTerm.trim().length === 0
    ) {
      // Gera mesas fake para scroll infinito
      const fakeTables: Table[] = Array.from({ length: PAGE_SIZE }, (_, index) => ({
        id: `fake-${renderedTables.length + index}`,
        title: ` ${renderedTables.length + index + 1}`,
        status: "Disponível",
        isOciosa: false,
        hasCommandOpen: false,
        subtotal: 0,
        timeIdle: 0,
        activity: "empty",
        orderSheets: [],
        pdvDevices: [],
        lastOrderCreated: null,
        hash: "",
        hasPdv: false,
      }));

      if ("requestIdleCallback" in window) {
        requestIdleCallback(() => insertData(fakeTables));
      } else {
        setTimeout(() => insertData(fakeTables), 300);
      }
    }
  }, [filteredTables, renderedTables.length, selectedFilter, searchTerm]);

  return {
    loading,
    isLoading,
    error,
    selectedFilter,
    setSelectedFilter,
    tables: renderedTables,
    loadMoreTables,
    searchTerm,
    setSearchTerm,
  };
}
