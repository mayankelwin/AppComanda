import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  padding: ${({ theme }) => theme.SPACING.XS}px;
  background-color: ${({ theme }) => theme.COLORS.BG_GRAY};
  flex-direction: row;
`;

export const SelectedTab = styled.View<{ isActive: boolean }>`
  padding: 12px;

  border-radius: 25px;
  margin-right: 10px;
  ${({ isActive, theme }) =>
    isActive
      ? css`
          background-color: ${theme.COLORS.BLACK};
        `
      : css`
          background-color: ${theme.COLORS.WHITE};
        `}
`;

export const TabText = styled.Text<{ isActive: boolean }>`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ isActive, theme }) =>
    isActive ? theme.COLORS.WHITE : theme.COLORS.BLACK};
`;
