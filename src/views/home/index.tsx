import { Alert } from 'react-native';
import React, { useState } from 'react';

import { Container, ContentContainer } from '../../theme/global';
import { Content, SubTitle, Title } from './styles';

import { Header } from '../../components/Header';
import { GlobalButton } from '../../components/GlobalButton';
import { OrderTypeModal } from '../../components/OrderTypeModal'; // importa seu modal
import { useHomeController } from './controller';

export function Home() {
  const { handleMap } = useHomeController();
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
        <Title>Mayan Kelwin!</Title>
        <SubTitle>Pigz Loja 1, 123 Avenida da Liberdade, São Paulo, SP, 01234-567</SubTitle>

        <Content>
          <GlobalButton name='Novo pedido' onPress={handleOpenModal} nomeIcon='add' />
          <GlobalButton name="Mapa de atendimentos" onPress={handleMap} nomeIcon='qr-code'/>
          <GlobalButton name="Configurações" onPress={() => Alert.alert("Botão pressionado!")} nomeIcon='settings'/>
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
