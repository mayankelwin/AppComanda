import styled from "styled-components/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;

  

  padding: ${({ theme }) => theme.SPACING.SM}px;

  border-radius: 8px;
  
  border-bottom-width: 5px;
  border-bottom-color: ${({ theme }) => theme.COLORS.BG_GRAY};
`;

export const InputSearch = styled.TextInput`
  color: ${({ theme }) => theme.COLORS.BLACK};
  padding: 10px;
  width: 100%;
  size: 16px;
  border-radius: 25px;
`;

export const Icon = styled(MaterialIcons)`
  margin-right: 8px;
  color: ${({ theme }) => theme.COLORS.ORANGE};
`;
