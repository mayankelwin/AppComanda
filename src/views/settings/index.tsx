
import {Container, ContentContainer} from "../../theme/global"
import { Header } from "../../components/Header"
import { TextRegular } from "../../ui/text_regular"
import { Botton, Content, Title } from "./styles"
import { useNavigation } from "@react-navigation/native";

export function Settings() {
    const navigation = useNavigation();
    function handleSettings (){
        navigation.navigate('Home');
      }
  return (
    <Container>
        <Header visibleheader1 />
        
        <ContentContainer>
            <TextRegular>Configurações</TextRegular>
            <TextRegular>Feito por Mayan (2025)</TextRegular>

            <Content>
            <Botton type="PRIMARY"> 
                <Title type="PRIMARY"> Modo nortuno  </Title>
            </Botton>
            <Botton type="SECONDARY" onPress={handleSettings} > 
                <Title type="SECONDARY"> Voltar para o Home  </Title>
            </Botton>

            </Content>

        </ContentContainer>
      
    </Container>
  )
}