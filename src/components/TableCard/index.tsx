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

const getTranslatedStatus = (apiStatus: string) => {
  switch (apiStatus) {
    case "active":
    case "Em Atendimento":
      return "Em Atendimento";

    case "empty":
    case "Disponível":
      return "Disponível";

    case "busy":
    case "Ocupada":
      return "Em Atendimento"; 

    case "Ociosas":
      return "Ociosas";

    case "Sem Pedidos":
      return "Sem Pedidos";
      
    default:
      return "—";
  }
};

export function TableCard({
  number,
  status,
  client,
  waitingTime,
  bill,
  ordersCount,
  customersCount,
  customerName,
}: Props) {
  const translatedStatus = getTranslatedStatus(status);

  const isEmpty =
    translatedStatus === "Disponível" ||
    (!client && !waitingTime && !bill && (status === "—" || !status));

  const showCustomerName =
    customersCount === 1 && customerName && customerName.trim().length > 0;

  return (
    <Container status={isEmpty ? "Disponível" : translatedStatus}>
      <TableNumber>{number}</TableNumber>

      {!isEmpty && (
        <>
          {!showCustomerName && (
            <>
              <Info>
                <Icon name="receipt" size={15} />
                <InfoText>{ordersCount ?? 0}</InfoText>
              </Info>

              <Info>
                <Icon name="person" size={15} />
                <InfoText>
                  {`${customersCount ?? 0} ${(customersCount ?? 0) > 1 ? "s" : ""}`}
                </InfoText>
              </Info>
            </>
          )}
          {showCustomerName && (
            <Info>
              <Icon name="person" size={15} />
              <InfoText>{customerName}</InfoText>
            </Info>
          )}

          <Info>
            <Icon name="timer" size={15} />
            <InfoText>{waitingTime ?? "0"}min</InfoText>
          </Info>

          <Info>
            <Icon name="attach-money" size={15} />
            <InfoText>{bill ?? "—"}</InfoText>
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
