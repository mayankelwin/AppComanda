import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const theme = {
  COLORS: {
    BG: "#FFFFFF",
    BG_GRAY: "#F2F2F7",
    
    BLACK: "#000000",
    WHITE: "#FFFFFF",
    GREEN: "#B8E5B8",
    RED:   "#F29DA5",
    YELLOW: "#F2E0AA",
    ORANGE: "#FA641E",

    GRAY_700: "#121214",
    GRAY_600: "#202024",
    GRAY_500: "#29292E",
    GRAY_400: "#323238",
    GRAY_300: "#7C7C8A",
    GRAY_200: "#C4C4CC",
    GRAY_100: "#E1E1E6",

  },

  FONT_FAMILY: {
    regular: "Poppins_Regular",
    bold: "Poppins_Bold",
  },

  FONT_SIZE: {
    SM: width * 0.035,              // 3.5% da largura da tela
    MD: width * 0.04,              // 4% da largura da tela
    LG: width * 0.045,            // 4.5% da largura da tela
    XL: width * 0.06,            // 6% da largura da tela
    XXL: width * 0.08,            // 8% da largura da tela
  },

  SPACING: {
    XS: width * 0.02,
    SM: width * 0.04,
    MD: width * 0.06,
    LG: width * 0.08,
  },

  SIZES: {
    cardy: width * 0.35,
    button: width * 0.42,
  },

  BORDER_RADIUS: {
    SM: width * 0.02,
    MD: width * 0.04,
    LG: width * 0.06,
  },

  SCREEN: {
    WIDTH: width,
    HEIGHT: height,
  },
};

export default theme;
