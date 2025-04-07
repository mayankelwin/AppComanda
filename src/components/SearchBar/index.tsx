import { TextInput } from "react-native";
import { Container, Icon, InputSearch } from "./styles";

export function SearchBar({ placeholder }: { placeholder: string }) {
    return (
        <Container>
            <Icon name="search" size={20}  />
            <InputSearch 
            placeholder={'Cliente, mesa, comanda, atendente'}
            placeholderTextColor={'#616161'} 
            />
        </Container>
    );
}
