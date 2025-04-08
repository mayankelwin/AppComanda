import { FlatList, TouchableOpacity } from "react-native";
import { useRef, useEffect } from "react";
import { Container, TabText, SelectedTab } from "./styles";

const filters = ["Em Atendimento", "Ociosas", "Sem Pedidos", "Disponível"];
const fixedFilters = ["Visão Geral"];

type Props = {
  selected: string;
  onSelect: (tab: string) => void;
};

export function FilterTabs({ selected, onSelect }: Props) {
  const flatListRef = useRef<FlatList>(null);

  const getFilterIndex = (filter: string) => {
    return filters.findIndex((item) => item === filter);
  };

  useEffect(() => {
    if (selected === "Visão Geral") {
      flatListRef.current?.scrollToOffset({ offset: 0, animated: true });
      return;
    }

    const index = getFilterIndex(selected);
    if (index !== -1 && flatListRef.current) {
      flatListRef.current.scrollToIndex({
        index,
        animated: true,
        viewPosition: 0.5,
      });
    }
  }, [selected]);

  return (
    <Container>
      <TouchableOpacity onPress={() => onSelect("Visão Geral")}>
        <SelectedTab isActive={selected === "Visão Geral"}>
          <TabText isActive={selected === "Visão Geral"}>Visão Geral</TabText>
        </SelectedTab>
      </TouchableOpacity>

      <FlatList
        ref={flatListRef}
        keyboardShouldPersistTaps="always"
        horizontal
        data={filters}
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onSelect(item)}>
            <SelectedTab isActive={selected === item}>
              <TabText isActive={selected === item}>{item}</TabText>
            </SelectedTab>
          </TouchableOpacity>
        )}
      />
    </Container>
  );
}
