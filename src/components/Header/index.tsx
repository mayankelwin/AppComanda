import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

import LogoPigz from '../../assets/logopigz.svg';
import { ButtonBack, Container, Content, Icon, ImgBox, Title } from "./styles";

type Props = {
  visibleheader1?: boolean;
  visibleheader2?: boolean;
};

export function Header({ visibleheader1 = false, visibleheader2 = false }: Props) {
  const navigation = useNavigation();
  const screenWidth = Dimensions.get("window").width;

  return (
    <Container>
      {visibleheader1 && (
        <ImgBox>
          <LogoPigz
            width={screenWidth * 0.6}
            height={screenWidth * 0.6 * 0.16}
            preserveAspectRatio="xMidYMid meet"
          />
        </ImgBox>
      )}

      {visibleheader2 && (
        <Content>
          <ButtonBack onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={24} />
          </ButtonBack>
          <Title>Mapa de atendimentos</Title>
        </Content>
      )}
    </Container>
  );
}
