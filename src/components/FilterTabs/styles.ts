import styled, { css } from "styled-components/native";

export const Container = styled.View`
  margin-vertical: ${({ theme }) => theme.SPACING.SM}px;
  width: 100%;
  
  padding: 0 ${({ theme }) => theme.SPACING.SM}px;


  flex-direction: row;
`;


export const SelectedTab = styled.View<{ isActive: boolean }>`
  padding: 12px 16px;

  border-radius: 20px;
  margin-right: 8px;
  ${({ isActive, theme }) =>
    isActive
      ? css`
          background-color: ${theme.COLORS.BLACK};
        `
      : css`
          background-color: ${theme.COLORS.GRAY_200};
        `}
`;

export const TabText = styled.Text<{ isActive: boolean }>`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ isActive, theme }) =>
    isActive ? theme.COLORS.WHITE : theme.COLORS.BLACK};
`;
