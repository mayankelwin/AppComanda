import { useNavigation } from "@react-navigation/native";

export function useHomeController() {
  const navigation = useNavigation();

  function handleMap (){
    navigation.navigate('Mapa');
  }

  return {
    handleMap,
  };
}