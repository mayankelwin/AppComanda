import { Container, TableNumber, Info, Icon, StatusTag, InfoText } from "./styles";

type Props = {
  number: string;
  status: string;
  client?: string;
  waitingTime?: string;
  bill?: string;
  ordersCount?: number;
  customersCount?: number;
  customerName?: string;
};

const getTranslatedStatus = (status: string) => {
  const map: Record<string, string> = {
    active: "Em Atendimento",
    "Em Atendimento": "Em Atendimento",
    busy: "Em Atendimento",
    Ocupada: "Em Atendimento",
    empty: "Disponível",
    Disponível: "Disponível",
    Ociosas: "Ociosas",
    "Sem Pedidos": "Sem Pedidos",
  };

  return map[status] || "—";
};

export function TableCard({
  number,
  status,
  client,
  waitingTime = "0",
  bill = "—",
  ordersCount = 0,
  customersCount = 0,
  customerName,
}: Props) {
  const translatedStatus = getTranslatedStatus(status);
  const isEmpty =
    translatedStatus === "Disponível" ||
    (!client && !waitingTime && !bill && (status === "—" || !status));

  const showCustomerName =
    customersCount === 1 && customerName?.trim();

  return (
    <Container status={isEmpty ? "Disponível" : translatedStatus}>
      <TableNumber>{number}</TableNumber>

      {!isEmpty && (
        <>
          {!showCustomerName ? (
            <>
              <Info>
                <Icon name="receipt" size={15} />
                <InfoText>{ordersCount}</InfoText>
              </Info>
              <Info>
                <Icon name="person" size={15} />
                <InfoText>{`${customersCount} ${customersCount > 1 ? "s" : ""}`}</InfoText>
              </Info>
            </>
          ) : (
            <Info>
              <Icon name="person" size={15} />
              <InfoText>{customerName}</InfoText>
            </Info>
          )}

          <Info>
            <Icon name="timer" size={15} />
            <InfoText>{waitingTime}min</InfoText>
          </Info>

          <Info>
            <Icon name="attach-money" size={15} />
            <InfoText>{bill}</InfoText>
          </Info>
        </>
      )}

      {translatedStatus !== "Disponível" && (
        <Info>
          <Icon name="room-service" size={15} />
          <StatusTag status={translatedStatus}>{translatedStatus}</StatusTag>
        </Info>
      )}
    </Container>
  );
}
