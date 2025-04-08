import { Container, Icon, InputSearch } from "./styles";

type SearchBarProps = {
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
};

export function SearchBar({ placeholder, value, onChangeText, }: SearchBarProps) {
  return (
    <Container>
      <Icon name="search" size={24} />
      <InputSearch 
        placeholder={placeholder}
        placeholderTextColor="#616161"
        style={{fontSize: 16}}
        value={value}
        onChangeText={onChangeText}
        keyboardType="default"
        
      />
    </Container>
  );
}
