import { TouchableOpacity } from "react-native";
import { Animated } from "react-native";
import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import checkPopup from "../../../assets/images/check-popup.png";
import errorPopup from "../../../assets/images/error-popup.png";
import InfoPopup from "../../../assets/images/info-popup.png";
import close from "../../../assets/images/close.png"

export const ContainerPopup = styled.View`
  width: 100%;
  max-width: 100%;
  height: auto;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: absolute
  border-radius: 7px;
  border-width: 1px;
  padding: 20px;
  top: 0px;
  left: -50%;
  z-index: 9999
`;

export const ContainerPopupText = styled.Text`
  font-family: "GalanoGrotesqueMedium";
  font-size: 14px;
  margin: 0px 20px;
  
`
export const ContainerPopupImg = styled.Image``

function Popup({ message, onClose, type }) {

  const fadeAnim = new Animated.Value(0); // Initial value for opacity: 0
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
    }).start();
  }, [])

  const ChangebackgroundColor = () => {
    if (type === "good") {
      return "#DCECCB";
    } else if (type === "error") {
      return "#FF8787";
    } else {
      return "#ACDCE4";
    }
  }

  return (
    <Animated.View style={{ opacity: fadeAnim, zIndex: 9999 }}>
      <ContainerPopup style={{ backgroundColor: ChangebackgroundColor() }}>
        <ContainerPopupImg source={checkPopup} />
        <ContainerPopupText>{message}</ContainerPopupText>
        <TouchableOpacity onPress={onClose}>
          <ContainerPopupImg source={close} />
        </TouchableOpacity>
      </ContainerPopup>
    </Animated.View>
  );
}

export default Popup;
