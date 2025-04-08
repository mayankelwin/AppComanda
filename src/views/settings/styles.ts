import { styled } from "styled-components/native";

export type ButtonTypeStyleProsps = 'PRIMARY' | 'SECONDARY';
type Props ={
  type: ButtonTypeStyleProsps;
}

export const Botton = styled.TouchableOpacity<Props>`
margin-top: 35px;
width: 100%;
height: 50px; 
border-radius: 25px;
background-color: ${({theme, type}) =>  type === 'PRIMARY' ? theme.COLORS.BLACK : theme.COLORS.GRAY_100};
padding: 10px;
justify-content: center;
align-items: center;
`

export const Title = styled.Text<Props>`
  font-family: ${({theme})=> theme.FONT_FAMILY.regular};
  font-size: ${({theme})=> theme.FONT_SIZE.MD};
  color: ${({theme, type}) =>  type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.BLACK};
`
export const Content = styled.View`
  flex: 1;
  `