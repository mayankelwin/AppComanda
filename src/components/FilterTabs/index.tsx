import React, { useRef, useEffect, useCallback, memo } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { Container, TabText, SelectedTab } from "./styles";

const filters = ["Em Atendimento", "Ociosas", "Sem Pedidos", "Disponível"];
const TAB_WIDTH = 120; 

type Props = {
  selected: string;
  onSelect: (tab: string) => void;
};

const FilterTabsComponent = ({ selected, onSelect }: Props) => {
  const flatListRef = useRef<FlatList<string>>(null);

  const scrollToSelected = useCallback(() => {
    if (selected === "Visão Geral") {
      flatListRef.current?.scrollToOffset({ offset: 0, animated: true });
      return;
    }

    const index = filters.findIndex((item) => item === selected);
    if (index !== -1) {
      flatListRef.current?.scrollToIndex({
        index,
        animated: true,
        viewPosition: 0.5,
      });
    }
  }, [selected]);

  useEffect(() => {
    scrollToSelected();
  }, [scrollToSelected]);

  const renderItem = useCallback(
    ({ item }: { item: string }) => {
      const isActive = selected === item;

      return (
        <TouchableOpacity onPress={() => onSelect(item)}>
          <SelectedTab isActive={isActive}>
            <TabText isActive={isActive}>{item}</TabText>
          </SelectedTab>
        </TouchableOpacity>
      );
    },
    [onSelect, selected]
  );

  return (
    <Container>
      <TouchableOpacity onPress={() => onSelect("Visão Geral")}>
        <SelectedTab isActive={selected === "Visão Geral"}>
          <TabText isActive={selected === "Visão Geral"}>Visão Geral</TabText>
        </SelectedTab>
      </TouchableOpacity>

      <FlatList
        ref={flatListRef}
        data={filters}
        keyExtractor={(item) => item}
        horizontal
        initialScrollIndex={0}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        getItemLayout={(_, index) => ({
          length: TAB_WIDTH,
          offset: TAB_WIDTH * index,
          index,
        })}
      />
    </Container>
  );
};

export const FilterTabs = memo(FilterTabsComponent);
