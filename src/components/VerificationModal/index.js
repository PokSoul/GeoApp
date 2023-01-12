import React from "react";
import { Text, Modal } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: black;
  margin-bottom: 16px;
`;

const Description = styled.Text`
  font-size: 16px;
  color: gray;
  margin-bottom: 24px;
  text-align:center;
`;

const ButtonContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const ButtonText = styled.TouchableOpacity`
  width: 172px;
  padding:20px;
  border-radius: 7px;
  justify-content: center;
  align-items: center;
`;

const VerificationModal = ({ visible, onClose, onCheck }) => {

  return (
    <Modal animationType="slide">
      <Container>
        <Title>Suppression Box</Title>
        <Description>
          Voulez vous supprimer votre box car cette action sera irréversible
        </Description>
        <ButtonContainer>
          <ButtonText onPress={onClose} style={{ backgroundColor: "#2654E3" }}>
            <Text
              style={{
                fontSize: 16,
                color: "white",
                fontFamily: "GalanoGrotesqueSemiBold",
                textAlign: "center",
              }}
            >
              Annuler
            </Text>
          </ButtonText>

          <ButtonText onPress={onCheck} style={{ backgroundColor: "#C81625" }}>
            <Text
              style={{
                fontSize: 16,
                color: "white",
                fontFamily: "GalanoGrotesqueSemiBold",
                textAlign: "center",
              }}
            >
              supprimer
            </Text>
          </ButtonText>
        </ButtonContainer>
      </Container>
    </Modal>
  );
};

export default VerificationModal;
