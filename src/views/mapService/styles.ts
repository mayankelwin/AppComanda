import styled, {css} from "styled-components/native";

export const Title = styled.Text`
${({theme} ) => css `
  margin-top: 16px;
  font-size: ${theme.FONT_SIZE.XL};
  font-weight: bold;
  color:${theme.COLORS.BLACK};
  
`}
`

export const GridContainer = styled.View`
  flex: 1;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.BG_GRAY};
  
  `