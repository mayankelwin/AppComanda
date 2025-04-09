import React from "react";
import { ActivityIndicator } from "react-native";
import styled, { useTheme } from "styled-components/native";

export function Loading() {
  const theme = useTheme();

  return (
    <Wrapper>
      <ActivityIndicator size={80} color={theme.COLORS.ORANGE} />
    </Wrapper>
  );
}
/* Estilização do componente  */
const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BG};
`;
