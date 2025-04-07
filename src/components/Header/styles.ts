import styled, {css} from "styled-components/native";
import { Dimensions } from "react-native";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const { height } = Dimensions.get("window");


export const Container = styled.View`
  width: 100%;
  height: ${height * 0.08}px; /* 8% da altura da tela */
  margin-top: ${height * 0.05}px; /* 5% da altura da tela */
  border-bottom-width: 5px;
  border-bottom-color: ${({ theme }) => theme.COLORS.BG_GRAY};
`;

export const ImgBox = styled.View`
  align-items: center;
  padding: 16px;
  `

export const Logo = styled.Image`
width: 205px;
height: 25px;
`

export const Icon = styled(MaterialIcons)`
  margin-right: 8px;
  color: ${({ theme }) => theme.COLORS.ORANGE};
`;

export const Content = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
 background-color: ${({ theme }) => theme.COLORS.BG};

  gap: 50px;
`
export const Title = styled.Text`
${({theme} ) => css `
  
  font-size: ${theme.FONT_SIZE.LG};
  font-weight: ${theme.FONT_FAMILY.bold};
  color:${theme.COLORS.BLACK};
  text-align: center;
  justify-content: center;
  align-items: center;
  
`}
  margin-bottom: 8px;
`;

export const ButtonBack = styled.TouchableOpacity`
  align-items: center;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 10px;`