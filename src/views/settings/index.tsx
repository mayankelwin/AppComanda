import { Container, ContentContainer } from "../../theme/global";
import { Header } from "../../components/Header";
import { TextRegular } from "../../ui/text_regular";
import {
  Botton,
  Content,
  Title,
  Section,
  SectionTitle,
  SettingRow,
  SettingText,
  Spacer,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, Switch } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import styled, { useTheme } from "styled-components/native";

export function Settings() {
  const navigation = useNavigation();
  const theme = useTheme();

  const settingsOptions = [
    {
      section: "Conta",
      options: [
        { icon: "person", label: "Editar Perfil", onPress: () => {} },
        { icon: "lock", label: "Alterar Senha", onPress: () => {} },
      ],
    },
    {
      section: "Notificações",
      options: [
        {
          icon: "notifications",
          label: "Receber Alertas",
          right: <Switch value={true} onValueChange={() => {}} />,
        },
      ],
    },
    {
      section: "Preferências",
      options: [
        {
          icon: "dark-mode",
          label: "Tema Escuro",
          right: <Switch value={false} onValueChange={() => {}} />,
        },
      ],
    },
  ];

  return (
    <Container>
      <Header visibleheader1 />
      <ScrollView>
        <ContentContainer>
          <TextRegular style={{ fontSize: theme.FONT_SIZE.XL, marginBottom: 16 }}>
            Configurações
          </TextRegular>

          {settingsOptions.map(({ section, options }) => (
            <Section key={section}>
              <SectionTitle>{section}</SectionTitle>
              {options.map(({ icon, label, right, onPress }) => (
                <SettingOption key={label} onPress={onPress}>
                  <MaterialIcon name={icon} size={24} color={theme.COLORS.BLACK} />
                  <SettingText>{label}</SettingText>
                  {right && <Spacer />}
                  {right}
                </SettingOption>
              ))}
            </Section>
          ))}

          <Content>
            <Botton type="PRIMARY" onPress={() => navigation.navigate("Mapa")}>
              <Title type="PRIMARY">Mapa de atendimentos</Title>
            </Botton>
            <Botton type="SECONDARY" onPress={() => navigation.navigate("Home")}>
              <Title type="SECONDARY">Voltar para o Home</Title>
            </Botton>
          </Content>
        </ContentContainer>
      </ScrollView>
    </Container>
  );
}

const SettingOption = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BG_GRAY};
  padding: ${({ theme }) => theme.SPACING.SM}px;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.MD}px;
  margin-bottom: 12px;
  gap: 12px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 2;
`;
