import { useState } from "react";
import { ButtonBack, Container, Content, Icon, ImgBox, Logo, Title } from "./styles";
import LogoImg from '../../assets/logo.png';
import LogoPigz from '../../assets/logopigz.svg';

import { useNavigation } from "@react-navigation/native";

type Props = {
  visibleheader1?: boolean;
  visibleheader2?: boolean;
};

export function Header( {visibleheader1 = false, visibleheader2 = false}: Props) {
  const navigation = useNavigation();
    

    return (
        <Container>
          {visibleheader1 &&(
            <ImgBox>
              <LogoPigz width={250} height={40} fill={"any color"} />
            </ImgBox>
          )}

          {visibleheader2 &&(
            <Content>
              
              <ButtonBack onPress={() => navigation.goBack()}>
                <Icon name="arrow-back" size={24}  />
              </ButtonBack>      
                <Title>Mapa de atendimentos</Title>
          
               </Content>

          )}
        </Container>
    );
}