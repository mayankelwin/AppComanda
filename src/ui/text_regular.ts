import { styled } from "styled-components/native";

type TextRegularProps = {
  sizer?: string;
};

export const TextRegular = styled.Text`
  font-family: ${({theme})=> theme.FONT_FAMILY.regular};
  font-size: ${({theme})=> theme.FONT_SIZE.MD};
  color: ${({theme})=> theme.COLORS.BLACK};
  `