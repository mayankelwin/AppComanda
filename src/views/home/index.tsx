import { Alert } from 'react-native';
import React from 'react';

import { Container, ContentContainer } from '../../theme/global';
import { Content, SubTitle, Title } from './styles';

import { Header } from '../../components/Header';
import { GlobalButton } from '../../components/GlobalButton';
import { useHomeController } from './controller';


export function Home() {
 const {
    handleMap
  } = useHomeController();


  return (
    <Container>
      <Header visibleheader1 />

      <ContentContainer> 
      <Title>Mayan Kelwin!</Title>
      <SubTitle>Pigz Loja 1, San Jose, Costa Rica</SubTitle>
      
      <Content>
      <GlobalButton name='Novo pedido' openModal nomeIcon='add' />
      <GlobalButton name="Mapa de atendimentos" onPress={handleMap} nomeIcon='qr-code'/>
      <GlobalButton name="Configurações" onPress={() => Alert.alert("Botão pressionado!")} nomeIcon='settings'/>
      </Content>
      </ContentContainer> 
    </Container>
  );
}