import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styled from "styled-components/native";

const StyledButton = styled(TouchableOpacity)`
  width: 100%;
  height: 50px;
  background: #2654e3;
  font-size: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
`;

const StyledButtonText = styled(Text)`
  font-size: 18px;
  color: #fff;
  font-family: "GalanoGrotesqueSemiBold";
`;

function Button(props) {
  return (
    <StyledButton
      onPress={props.onPress}
    >
      <StyledButtonText>{props.text}</StyledButtonText>
    </StyledButton>
  );
}

export default Button;
