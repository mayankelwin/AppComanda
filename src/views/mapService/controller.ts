import { useEffect, useMemo, useState } from "react";
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

  const dispatch = useDispatch();
  const { tables: tablesRedux, loading, error } = useSelector((state: RootState) => state.table);

  useEffect(() => {
    dispatch(fetchTables() as any);
  }, [dispatch]);

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

  const filteredTables = useMemo(() => {
    const filtered = normalizedTables.filter((table) => {
      switch (selectedFilter) {
        case "Em Atendimento":
          return table.status === "Em Atendimento";
        case "Ociosas":
          return table.status === "Ociosas";
        case "Sem Pedidos":
          return table.status === "Sem Pedidos";
        case "Disponível":
          return table.status === "Disponível";
        default:
          return true;
      }
    });

    if (searchTerm.trim() === "") return filtered;

    const lowerSearch = searchTerm.toLowerCase();

    return filtered.filter((table) => {
      const titleMatch = table.title?.toLowerCase().includes(lowerSearch);
      const nameMatch = table.orderSheets?.[0]?.customerName?.toLowerCase().includes(lowerSearch);
      return titleMatch || nameMatch;
    });
  }, [normalizedTables, selectedFilter, searchTerm]);

  // Reset ao trocar filtro ou busca
  useEffect(() => {
    const initial = filteredTables.slice(0, PAGE_SIZE);
    setRenderedTables(initial);
    setCurrentIndex(PAGE_SIZE);
  }, [filteredTables]);

  const loadMoreTables = () => {
    const nextBatch = filteredTables.slice(
      renderedTables.length,
      renderedTables.length + PAGE_SIZE
    );
  
    if (nextBatch.length > 0) {
      setTimeout(() => {
        setRenderedTables((prev) => [...prev, ...nextBatch]);
      }, 500);
    } else if (
      (selectedFilter === "Disponível" || selectedFilter === "Visão Geral") &&
      searchTerm.trim() === ""
    ) {
      // Gerar novos cards "Disponíveis" apenas nos filtros "Disponível" ou "Visão Geral"
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
  
      setTimeout(() => {
        setRenderedTables((prev) => [...prev, ...fakeTables]);
      }, 500);
    }
  };
  
  

  return {
    loading,
    error,
    selectedFilter,
    setSelectedFilter,
    tables: renderedTables,
    loadMoreTables,
    searchTerm,
    setSearchTerm,
  };
}
