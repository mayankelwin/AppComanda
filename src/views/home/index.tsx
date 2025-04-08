import React, { useState } from 'react';

import { Container, ContentContainer } from '../../theme/global';
import { Content, SubTitle, Title } from './styles';

import { Header } from '../../components/Header';
import { GlobalButton } from '../../components/GlobalButton';
import { OrderTypeModal } from '../../components/OrderTypeModal'; 
import { useHomeController } from './controller';

export function Home() {
  const { handleMap, handleSettings } = useHomeController();
  const [isModalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => setModalVisible(true);
  const handleCloseModal = () => setModalVisible(false);

  const handleSelectOrder = (type: string) => {
    console.log("Tipo de pedido selecionado:", type);
    setModalVisible(false);
  };

  return (
    <Container>
      <Header visibleheader1 />

      <ContentContainer> 
        <Title>Ghabrichelson</Title>
        <SubTitle>Zigpi Restaurante</SubTitle>

        <Content>
          <GlobalButton name='Novo pedido' onPress={handleOpenModal} nomeIcon='add' />
          <GlobalButton name="Mapa de atendimentos" onPress={handleMap} nomeIcon='qr-code'/>
          <GlobalButton name="Configurações" onPress={handleSettings} nomeIcon='settings'/>
        </Content>
      </ContentContainer>

      {/* Modal de tipo de pedido */}
      <OrderTypeModal 
        visible={isModalVisible} 
        onClose={handleCloseModal} 
        onSelect={handleSelectOrder}
      />
    </Container>
  );
}
