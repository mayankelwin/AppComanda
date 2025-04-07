import { Alert } from "react-native";
import { BTN, Title } from "./styles";
import { useCallback, useState } from "react";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { OrderTypeModal } from "../OrderTypeModal/index";

type Props = {
  name?: string;
  onPress?: () => void;
  openModal?: boolean;
  nomeIcon?: string;
};

export function GlobalButton({
  name,
  onPress,
  nomeIcon = "touch-app",
  openModal = false,
}: Props) {
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = useCallback(() => {
    onPress?.();
    if (openModal) setModalVisible(true);
  }, [onPress, openModal]);

  const handleSelect = useCallback((type: string) => {
    Alert.alert("Tipo de pedido selecionado:", type);
    setModalVisible(false);
  }, []);

  return (
    <>
      <BTN onPress={handlePress}>
        <MaterialIcons name={nomeIcon} size={28} color="black" style={{ marginBottom: 12 }} />
        <Title>{name}</Title>
      </BTN>

      {openModal && (
        <OrderTypeModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onSelect={handleSelect}
        />
      )}
    </>
  );
}
