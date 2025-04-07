import React from "react";
import { Modal } from "react-native";
import {
  ModalContainer,
  ModalContent,
  Header,
  Title,
  Subtitle,
  OptionButton,
  OptionText,
  IconContainer,
} from "./styles";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";

type Props = {
  visible: boolean;
  onClose: () => void;
  onSelect: (type: string) => void;
};

export function OrderTypeModal({ visible, onClose, onSelect }: Props) {
  return (
    <Modal transparent animationType="slide" visible={visible}>
      <ModalContainer >
        <ModalContent>
          <Header />
          <Title>Novo pedido</Title>
          <Subtitle>Selecione o tipo de pedido</Subtitle>

          {/* Botão Mesa/Comanda */}
          <OptionButton onPress={() => onSelect("Mesa/Comanda")}>
            <IconContainer>
            <MaterialIcons name="table-restaurant" size={24} color="black" />
            </IconContainer>
            <OptionText>Mesa/Comanda</OptionText>
            <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
          </OptionButton>

          {/* Botão Balcão */}
          <OptionButton onPress={() => onSelect("Balcão")}>
            <IconContainer>
            <MaterialIcons name="shopping-bag" size={24} color="black" />
            </IconContainer>
            <OptionText>Balcão</OptionText>
            <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
          </OptionButton>
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
}
