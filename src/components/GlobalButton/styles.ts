import styled, { css } from "styled-components/native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const buttonWidth = width * 0.40;

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const BTN = styled.TouchableOpacity`
  width: ${({ theme }) => theme.SIZES.button};
  height: ${({ theme }) => theme.SIZES.button};
  padding: ${({ theme }) => theme.SPACING.MD}px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  border-radius: 12px;
  justify-content: space-between;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    width: ${buttonWidth}px;
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.bold};
    color: ${theme.COLORS.GRAY_700};
    margin-top: ${theme.SPACING.SM}px;
  `}
`;
