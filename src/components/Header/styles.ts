import styled, { css } from "styled-components/native";
import { Dimensions } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const { height, width } = Dimensions.get("window");

export const Container = styled.View`
  width: 100%;
  height: ${({ theme }) => theme.SCREEN.HEIGHT}px;
  margin-top: ${({ theme }) => theme.SCREEN.MT}px;
  border-bottom-width: 5px;
  border-bottom-color: ${({ theme }) => theme.COLORS.BG_GRAY};
  justify-content: center;
  align-items: center;
`;

export const ImgBox = styled.View`
  align-items: center;
  padding: ${({ theme }) => theme.SPACING.MD}px;
`;

export const Logo = styled.Image`
  width: ${width * 0.5}px;
  height: ${height * 0.04}px;
  align-self: center;
`;

export const Icon = styled(MaterialIcons)`
  color: ${({ theme }) => theme.COLORS.ORANGE};
`;

export const Content = styled.View`
  width: 100%;
  flex-direction: row;

  margin-left: ${({ theme }) => theme.SPACING.MD}px;
  gap: ${({ theme }) => theme.SPACING.XL}px;

  align-items: center;
  text-align: center;

  background-color: ${({ theme }) => theme.COLORS.BG};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.bold};
    color: ${theme.COLORS.BLACK};
    text-align: center;
  `}
  margin-bottom: ${({ theme }) => theme.SPACING.XS}px;
`;

export const ButtonBack = styled.TouchableOpacity`
  align-items: center;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.SM}px;
  margin-bottom: ${({ theme }) => theme.SPACING.SM}px;
`;
