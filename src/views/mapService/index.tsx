import { Header } from "../../components/Header";
import { Container } from "../../theme/global";
import { GridContainer } from "./styles";
import { formatCurrency} from "../../utils/formatters";

import { SearchBar } from "../../components/SearchBar";
import { FilterTabs } from "../../components/FilterTabs";
import { TableCard } from "../../components/TableCard";
import { FlashList } from "@shopify/flash-list";

import { useMapServiceController } from "./controller";
import { useRef, useEffect } from "react";

export function MapaService() {
  const {
    tables,
    selectedFilter,
    setSelectedFilter,
    loadMoreTables,
    searchTerm,
    setSearchTerm,
  } = useMapServiceController();

  const listRef = useRef<FlashList<any>>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      listRef.current?.scrollToOffset({ offset: 0, animated: true });
    }, 100);

    return () => clearTimeout(timeout);
  }, [selectedFilter]);

  return (
    <Container>
      <Header visibleheader2 />
      <SearchBar
       placeholder="Cliente, mesa, comanda, atendente"
       value={searchTerm}
       onChangeText={setSearchTerm}
      />
      <FilterTabs
        selected={selectedFilter}
        onSelect={setSelectedFilter}
      />

      <GridContainer>
        <FlashList
          ref={listRef}
          data={tables}

          keyExtractor={(item, index) => `${item.id}-${index}`}
          numColumns={3}
          estimatedItemSize={200}
          showsVerticalScrollIndicator={false}
          onEndReached={loadMoreTables}
          onEndReachedThreshold={0.5}
          contentContainerStyle={{ gap: 12, paddingBottom: 16 }}
          columnWrapperStyle={{ gap: 12 }}
          renderItem={({ item }) => (
            <TableCard
              number={item.title}
              status={item.status}
              client={item.orderSheets?.[0]?.user?.name ?? ""}
              customerName={item.orderSheets?.[0]?.customerName ?? ""}
              waitingTime={item.idleTime }
              bill={
                item.orderSheets?.[0]?.subtotal != null
                  ? formatCurrency(item.orderSheets[0].subtotal)
                  : undefined
              }
              ordersCount={1}
              customersCount={item.orderSheets?.[0]?.numberOfCustomers ?? 0}
            />
          )}
        />
      </GridContainer>
    </Container>
  );
}
