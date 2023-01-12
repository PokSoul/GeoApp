import styled from "styled-components";

export const RegisterFormContainer = styled.View`
  flex: 1;
  background:white;
  padding: 30px 20px;
`;

export const RegisterFormInput = styled.TextInput`
  width: 80%;
  height: 50px;
  font-size: 18px;
  padding: 10px;
  background: #F1F5FE;
  margin-bottom: 10px;
  border-radius: 5px;
  margin-bottom: 30px;
  font-family: "GalanoGrotesqueRegular";
  border-width: 1px;
`;

export const RegisterFormButton = styled.TouchableOpacity`
  width: 80%;
  height: 50px;
  background: #2654E3;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  
`;

export const RegisterFormButtonText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-family: "GalanoGrotesqueSemiBold"
`;



export const RegisterFormLabel = styled.Text`
  font-size: 18px;
  color: #262626;
  align-self: left;
  margin-left: 40px;
  margin-bottom: 10px;
  font-family: "GalanoGrotesqueMedium"
`;

export const RegisterFormText = styled.Text`
  font-size: 18px;
  font-family: "GalanoGrotesqueSemiBold";
  text-align: center;
  margin-bottom: 10px;

`;

export const RegisterFormTitle = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-bottom: 30px;
  margin-top: 10%;
  width: 100%;
  border-width: 1px;
`;

export const RegisterFormButtonBack = styled.TouchableOpacity`
  position absolute;
  margin-top: 30px;
  left: -150px;
  top: 17px;
`;

export const RegisterFormArrow = styled.Image`
  
`