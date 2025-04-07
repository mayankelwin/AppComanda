import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTables } from "../../store/tableSlice";
import { RootState } from "../../store";
import { Table } from "../../types/Table";

type FiltroStatus = "Visão Geral" | "Em Atendimento" | "Disponível" | "Ociosas" | "Sem Pedidos";

const TEMPO_OCIOSO_LIMITE = 15;

export function useMapaAtendimentosController() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const dispatch = useDispatch();
  const [selectedFilter, setSelectedFilter] = useState<FiltroStatus>("Visão Geral");
  const [renderedTables, setRenderedTables] = useState<Table[]>([]);

  const { tables: tablesRedux, loading, error } = useSelector(
    (state: RootState) => state.table
  );

  useEffect(() => {
    dispatch(fetchTables() as any);
  }, [dispatch]);

  const normalizedTables = useMemo<Table[]>(() => {
    if (!Array.isArray(tablesRedux)) return [];
  
    return tablesRedux.map((table) => {
      const primeiraComanda = table.orderSheets?.[0];
      const hasComandaAberta = table.orderSheets && table.orderSheets.length > 0;
      const tempoOciosoSeg = Number(primeiraComanda?.idleTime ?? 0);
      const subtotal = primeiraComanda?.subtotal ?? 0;
  
      let status: Table["status"];
  
      if (!hasComandaAberta && table.activity === "empty") {
        status = "Disponível";
      } else if (hasComandaAberta && subtotal === 0) {
        status = "Sem Pedidos";
      } else if (hasComandaAberta && subtotal > 0 && tempoOciosoSeg > TEMPO_OCIOSO_LIMITE) {
        status = "Ociosas";
      } else if (hasComandaAberta && subtotal > 0 && tempoOciosoSeg <= TEMPO_OCIOSO_LIMITE) {
        status = "Em Atendimento";
      } else {
        status = "Desconhecido";
      }
  
      return {
        ...table,
        status,
        isOciosa: status === "Ociosas",
        hasComandaAberta,
        subtotal,
        tempoOciosoSeg,
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
      const idMatch = String(table.id).includes(lowerSearch);
      return titleMatch || idMatch;
    });
  }, [normalizedTables, selectedFilter, searchTerm]);
  

  useEffect(() => {
    setRenderedTables(filteredTables.slice(0, 20));
  }, [filteredTables]);

  const loadMoreTables = () => {
    const nextBatch = filteredTables.slice(
      renderedTables.length,
      renderedTables.length + 20
    );

    if (nextBatch.length > 0) {
      setTimeout(() => {
        setRenderedTables((prev) => [...prev, ...nextBatch]);
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
