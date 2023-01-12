import styled from "styled-components";


export const HomeContainer = styled.View`
  flex: 1;
  background: white;
  padding: 40px 20px;
`;

export const HomeTitleUser = styled.Text`
  font-size: 20px;
  margin-top: 30px;
  font-family: "GalanoGrotesqueSemiBold";
  margin-bottom: 5px;
`;

export const HomeSensors = styled.View`
  width: 100%;
  height: auto;
  flex-direction:row;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const HomeCard = styled.TouchableOpacity`
width: 156px;
height: 161px;
border-radius: 7px;
background: #2654E3;
margin-top: 10px;
justify-content: center;
align-items: center;
`

export const HomeCardTitle = styled.Text`
font-size: 14px;
font-family: "GalanoGrotesqueMedium";
color: white;
margin-top: 10px;
`