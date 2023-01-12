import React from "react";
import styled from "styled-components/native";
import ImgSensor from '../../../assets/images/img-sensor.png'

export const ContainerCard = styled.TouchableOpacity`
  width: 156px;
  height: 161px;
  border-radius: 7px;
  background: #F1F5FE;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`

export const ContainerCardTitle = styled.Text`
  font-size: 14px;
  font-family: "GalanoGrotesqueMedium";
  margin-top: 10px;
`

export const ContainerCardImage = styled.Image``


const CardSensor = (props) => {
  return (
    <ContainerCard onPress={props.onPress}>
      <ContainerCardImage source={ImgSensor} />
      <ContainerCardTitle>{props.text}</ContainerCardTitle>
    </ContainerCard>
  );
};

export default CardSensor;