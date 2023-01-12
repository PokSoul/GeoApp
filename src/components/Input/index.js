import React, {useState, useEffect} from "react";
import styled from "styled-components/native";
import ImgOpenEye from '../../../assets/images/open-eye.png'
import ImgHideEye from "../../../assets/images/hide-eye.png";
import { Image } from "react-native";


export const InputText = styled.TextInput`
  width: 100%;
  height: 50px;
  font-size: 18px;
  padding: 10px;
  background: #f1f5fe;
  
  border-radius: 5px;
  
  font-family: "GalanoGrotesqueRegular";
  border-width: 1px;
  
`;

export const TextLabel = styled.Text`
  font-size: 18px;
  color: #262626;
  align-self: left;
  margin-bottom: 10px;
  font-family: "GalanoGrotesqueMedium";
`;

export const ContainterInput = styled.View`
  width: 100%;
  height: 50px;
  position:relative;
  margin-bottom: 30px;
`

export const ButtonEye = styled.TouchableOpacity`
  position:absolute;
  right: 10px;
  top: 10px;
`

function Input(props) {
  return (
    <>
      <TextLabel style={props.style}>{props.label}</TextLabel>
      <ContainterInput>
        <InputText
          style={{
            borderColor: props.condition ? "green" : "#F1F5FE",
          }}
          placeholder={props.placeholder}
          value={props.value}
          onChangeText={props.onChangeText}
          secureTextEntry={
            props.secureTextEntry && props.type === "password"
              ? props.secureTextEntry
              : false
          }
        />
        {props.secureTextEntry === true && props.type === "password" ? (
          <ButtonEye onPress={props.showPassword}>
            <Image source={ImgOpenEye} />
          </ButtonEye>
        ) : (
          ""
        )}
        {props.secureTextEntry === false && props.type === "password" ? (
          <ButtonEye onPress={props.showPassword}>
            <Image source={ImgHideEye} />
          </ButtonEye>
        ) : (
          ""
        )}
      </ContainterInput>
    </>
  );
}

export default Input;
