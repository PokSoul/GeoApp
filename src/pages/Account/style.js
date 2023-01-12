import styled from "styled-components";

export const AccountContainer = styled.View`
  flex: 1;
  background: white;
  align-items: center;
  justify-content: start;
  padding: 60px 20px;
  position: relative;
`;

export const AccountTitleUser = styled.Text`
  font-size: 32px;
  margin-top: 30px;
  font-family: "GalanoGrotesqueSemiBold";
  align-self: start;
  margin-bottom: 35px;
`;

export const AccountButtonLogout = styled.TouchableOpacity`
width: 44px;
height: 44px;
background: #F1F5FE;
border-width: 0.1px;
border-radius: 50%;
position: absolute;
right:20px;
top: 80px;
justify-content: center;
align-items:center;
`
