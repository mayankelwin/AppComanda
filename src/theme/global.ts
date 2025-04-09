import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BG};
`;
export const ContentContainer = styled.View`
  padding: ${({ theme }) => theme.SPACING.SM}px;
  `
