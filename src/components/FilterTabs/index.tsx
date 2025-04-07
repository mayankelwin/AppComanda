import { FlatList, TouchableOpacity } from "react-native";
import { Container, TabText, SelectedTab } from "./styles";

const filters = 
["Em Atendimento", "Ociosas", "Sem Pedidos", "Disponível"];
const fixedFilters = ["Visão Geral"];

type Props = {
  selected: string;
  onSelect: (tab: string) => void;
};

export function FilterTabs({ selected, onSelect }: Props) {

  return (
    <Container>

      <TouchableOpacity onPress={() => onSelect("Visão Geral")}>
      <SelectedTab isActive={selected === "Visão Geral"}>
              <TabText isActive={selected === "Visão Geral"}>Visão Geral</TabText>
      </SelectedTab>
         </TouchableOpacity>

      <FlatList
        horizontal
        data={filters}
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onSelect(item)}>
            <SelectedTab isActive={selected === item} >
              <TabText isActive={selected === item}>{item}</TabText>
            </SelectedTab>
          </TouchableOpacity>
        )}
      />
    </Container>
  );
}
