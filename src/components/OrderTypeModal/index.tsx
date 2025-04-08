import React, { useRef } from "react";
import { Modalize } from "react-native-modalize";
import {
  ModalContent,
  Title,
  Subtitle,
  OptionButton,
  OptionText,
  IconContainer,
} from "./styles";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Dimensions } from "react-native";

type Props = {
  visible: boolean;
  onClose: () => void;
  onSelect: (type: string) => void;
};

const screenHeight = Dimensions.get("window").height;

export function OrderTypeModal({ visible, onClose, onSelect }: Props) {
  const modalRef = useRef<Modalize>(null);

  // Abrir/fechar modal
  React.useEffect(() => {
    if (visible) {
      modalRef.current?.open();
    } else {
      modalRef.current?.close();
    }
  }, [visible]);

  return (
    <Modalize
      ref={modalRef}
      adjustToContentHeight
      onClosed={onClose}
      panGestureEnabled // permite arrastar para fechar
      closeOnOverlayTap // fechar ao tocar fora da tela
      handlePosition="inside"
      modalStyle={{
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        paddingHorizontal: 24,
        paddingBottom: 24,
        backgroundColor: "white",
      }}
    >
      <ModalContent>
        
        <Title>Novo pedido</Title>
        <Subtitle>Selecione o tipo de pedido</Subtitle>

        <OptionButton onPress={() => onSelect("Mesa/Comanda")}>
          <IconContainer>
            <MaterialIcons name="table-restaurant" size={24} color="black" />
          </IconContainer>
          <OptionText>Mesa/Comanda</OptionText>
          <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
        </OptionButton>

        <OptionButton onPress={() => onSelect("Balcão")}>
          <IconContainer>
            <MaterialIcons name="shopping-bag" size={24} color="black" />
          </IconContainer>
          <OptionText>Balcão</OptionText>
          <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
        </OptionButton>
      </ModalContent>
    </Modalize>
  );
}
