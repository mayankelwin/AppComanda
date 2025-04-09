import styled, { css } from "styled-components/native";

export const Title = styled.Text`
  ${({ theme }) => css`
    margin-top: ${theme.SPACING.SM}px;
    font-size: ${theme.FONT_SIZE.XL}px;
    font-weight: bold;
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    margin-top: ${theme.SPACING.XS}px;
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.bold};
    color: ${theme.COLORS.GRAY_500};
    margin-bottom: ${theme.SPACING.LG}px;
  `}
`;

export const Content = styled.View`
  ${({ theme }) => css`
    
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: ${theme.SPACING.LG}px;
  `}
`;
