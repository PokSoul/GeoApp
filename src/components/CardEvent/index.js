import React from "react";
import styled from "styled-components/native";
import concert from "../../../assets/images/concert.png"

export const ContainerCard = styled.View`
  width: 100%;
  border-radius: 5px;
  alignItems: start;
  position: relative;
  height: 201px;
  margin-top: 10px;
  padding: 0px 6px;
`;

export const ContainerCardImage = styled.Image`
  width: 100%;
  height: 100%;
  borderRadius: 5px;
`;

export const ContainerCardTitle = styled.Text`
  font-size: 18px;
  position: relative;
  bottom: 60px;
  color:white;
  left: 10px;
  font-family: "GalanoGrotesqueSemiBold";
`;

export const ContainerCardText = styled.Text`
  font-family: "GalanoGrotesqueRegular";
  font-size: 13px;
  color:white;
  left: 10px;
  position: relative;
  bottom: 55px;
`;

export const ContainerCardDate = styled.View`
  position: absolute;
  top: 10px;
  right: 20px;
  width: 50px;
  height: 49px;
  background: #FFFFFF;
  border-radius: 7px;
  justify-content: center;
  align-items: center;
`

export const ContainerCardDateText = styled.Text`
  font-family: "GalanoGrotesqueSemiBold";
`;

export const ContainerCardHours = styled.Text`
  position: absolute;
  bottom: 22px;
  right: 20px;
  color: white;
  font-family: "GalanoGrotesqueRegular";
`

const CardEvent = () => {
  return (
    <>
      <ContainerCard>
        <ContainerCardImage
          source={concert}
          resizeMode=" contain"
          prefetch
          cache="force-cache"
        />
        <ContainerCardTitle>Concert chretien Music</ContainerCardTitle>
        <ContainerCardText>
          12 rue de fontaine 77270 villeparisis
        </ContainerCardText>
        <ContainerCardDate>
          <ContainerCardDateText>22</ContainerCardDateText>
          <ContainerCardDateText>DEC</ContainerCardDateText>
        </ContainerCardDate>
        <ContainerCardHours>14h00</ContainerCardHours>
      </ContainerCard>
    </>
  );
};

export default CardEvent;
