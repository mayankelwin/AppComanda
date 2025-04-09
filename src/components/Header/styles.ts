import styled, { css } from "styled-components/native";
import { Dimensions } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const { height, width } = Dimensions.get("window");

export const Container = styled.View`
  width: 100%;
  height: ${height * 0.08}px;
  margin-top: ${height * 0.05}px;
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
  height: ${height * 0.03}px;
  align-self: center;
`;

export const Icon = styled(MaterialIcons)`
  margin-right: ${({ theme }) => theme.SPACING.XS}px;
  color: ${({ theme }) => theme.COLORS.ORANGE};
`;

export const Content = styled.View`
  margin-left: ${({ theme }) => theme.SPACING.MD}px;
  flex-direction: row;
  width: 100%;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BG};
  gap: ${({ theme }) => theme.SPACING.SM}px;
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
