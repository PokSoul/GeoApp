import styled from "styled-components/native";

export const LoginFormContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: start;
  background: white;
  padding: 0px 25px;
`;


export const LoginFormButton = styled.Text`
  color: black;
  font-size: 16px;
  margin-top: 20px;
  font-family: "GalanoGrotesqueMedium"
`;

export const ForgetPassword = styled.TouchableOpacity`

position: relative;
  top: -19px;
  right: -120px
`

export const ForgetPasswordText = styled.Text`
  font-family: "GalanoGrotesqueMedium"
`;

export const ButtonGoogle = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background: #647BAD;
  font-size: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  flex-direction: row;
`

export const ButtonFacebook = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background: #3F5591;
  font-size: 20px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size:18px;
  margin-left: 20px;
  font-family: "GalanoGrotesqueSemiBold";
`


