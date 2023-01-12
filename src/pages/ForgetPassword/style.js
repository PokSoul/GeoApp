import styled from "styled-components/native";


export const Container = styled.View`
flex: 1;
  align-items: center;
  justify-content: start;
  background: white;
  padding: 70px 25px;
  position: relative;
`
export const ContainerTitle = styled.Text`
  font-size: 20px;
  font-family: "GalanoGrotesqueSemiBold";
  text-align:center;
  margin-bottom: 90px;
`

export const ContainerText = styled.Text`
font-family: "GalanoGrotesqueMedium";
font-size: 14px;
margin: 30px 0px;
text-align:center;
`

export const ArrowBack = styled.TouchableOpacity`
  position: absolute;
  top: 70px;
  left: 40px;
`