import styled from "styled-components/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

interface StatusProps {
  status: string;
}

export const Container = styled.View<StatusProps>`
  flex: 1;
  height: ${({ theme }) => theme.SIZES.cardy};

  margin: 4px 4px 4px 4px;
  
  border-radius: 12px;
  padding: 10px;
  justify-content: flex-start;
  background-color: ${({ status, theme }) =>
    status === "Ociosas"
      ? theme.COLORS.RED
      : status === "Sem Pedidos"
      ? theme.COLORS.YELLOW
      : status === "Disponível"
      ? theme.COLORS.WHITE
      : status === "Em Atendimento"
      ? theme.COLORS.GREEN
      : theme.COLORS.WHITE};
`;

export const InfoText = styled.Text`
  font-size: 10px;
  color: #333;
  with: 50%;
  font-weight: bold;
`;

export const TableNumber = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  color: black;
`;

export const Info = styled.View`
  
  flex-direction: row;
  align-items: center;
  margin-bottom: 2px;
  gap: 4px;
 
`;

export const Icon = styled(MaterialIcons)`
  margin-right: 4px;
  color: black;
`;

export const StatusTag = styled.Text<StatusProps>`
  color: black;
  font-size: 12px;
  font-weight: bold;
`;
