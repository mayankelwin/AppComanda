import styled from "styled-components/native";

export const ModalContainer = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.29);
  justify-content: flex-end;
`;

export const ModalContent = styled.View`
  background-color: white;
  padding: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: #333;
`;

export const Subtitle = styled.Text`
  font-size: 14px;
  text-align: center;
  color: #666;
  margin-bottom: 20px;
`;

export const OptionButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: #f7f7f7;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const OptionText = styled.Text`
  flex: 1;
  font-size: 16px;
  color: #333;
  margin-left: 10px;
`;

export const IconContainer = styled.View`
  width: 30px;
  align-items: center;
`;
