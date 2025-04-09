import { styled } from "styled-components/native";

export type ButtonTypeStyleProsps = 'PRIMARY' | 'SECONDARY';
type Props ={
  type: ButtonTypeStyleProsps;
}

export const Botton = styled.TouchableOpacity<Props>`
margin-top: 10px;
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
  margin-bottom: 20px;
  `
  
export const Section = styled.View`
  margin-top: 24px;
  padding-bottom: 12px;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const SectionTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_600};
  font-family: ${({ theme }) => theme.FONT_FAMILY.bold};
  margin-bottom: 12px;
`;

export const SettingRow = styled.View`
  flex-direction: row;
  align-items: center;
  padding-vertical: 10px;
  gap: 12px;
`;

export const SettingText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONT_FAMILY.regular};
`;

export const Spacer = styled.View`
  flex: 1;
`;
