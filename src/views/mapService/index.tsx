import { useRef, useEffect, useCallback, useMemo } from "react";
import { Dimensions } from "react-native";
import { FlashList } from "@shopify/flash-list";

import { Container } from "../../theme/global";
import { GridContainer } from "./styles";
import { formatCurrency } from "../../utils/formatters";

import { Header } from "../../components/Header";
import { SearchBar } from "../../components/SearchBar";
import { FilterTabs } from "../../components/FilterTabs";
import { TableCard } from "../../components/TableCard";
import { Loading } from "../../components/Loading";

import { useMapServiceController } from "./controller";
import theme from "../../theme";

export function MapaService() {
  const {
    tables,
    selectedFilter,
    setSelectedFilter,
    loadMoreTables,
    searchTerm,
    setSearchTerm,
    isLoading,
  } = useMapServiceController();

  const listRef = useRef<FlashList<any>>(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollToOffset({ offset: 0, animated: true });
    }
  }, [selectedFilter]);

  const keyExtractor = useCallback((item: any, index: number) => `${item.id}-${index}`, []);

  const renderItem = useCallback(
    ({ item }: { item: any }) => (
      <TableCard
        number={item.title}
        status={item.status}
        client={item.orderSheets?.[0]?.user?.name ?? ""}
        customerName={item.orderSheets?.[0]?.customerName ?? ""}
        waitingTime={item.idleTime}
        bill={
          item.orderSheets?.[0]?.subtotal != null
            ? formatCurrency(item.orderSheets[0].subtotal)
            : undefined
        }
        ordersCount={1}
        customersCount={item.orderSheets?.[0]?.numberOfCustomers ?? 0}
      />
    ),
    []
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <Header visibleheader2 />
      <SearchBar
        placeholder="Cliente, mesa, comanda, atendente"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />

      <GridContainer>
        <FilterTabs selected={selectedFilter} onSelect={setSelectedFilter} />

        <FlashList
          ref={listRef}
          data={tables}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          estimatedItemSize={theme.SIZES.cardy}
          decelerationRate={0.92}
          estimatedListSize={{
            height: theme.SIZES.cardy * 10,
            width: Dimensions.get('screen').width-8,
          }}
          numColumns={3}
          onEndReached={loadMoreTables}
          onEndReachedThreshold={0.5}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 16,}}
        />
      </GridContainer>
    </Container>
  );
}
