import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  View,
  Text,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";


const CardDetail = (props) => {
  return (
    <DetailsInfoCard>
      <Image source={props.source} style={{ marginLeft: 10 }} />
      <View style={{ marginLeft: 10 }}>
        <DetailsNumber>{props.number}</DetailsNumber>
        <DetailsText>{props.text}</DetailsText>
      </View>
    </DetailsInfoCard>
  );
}


export const DetailsNumber = styled.Text`
  font-size: 16px;
  font-family: "GalanoGrotesqueSemiBold";
  text-align: left;
`

export const DetailsText = styled.Text`
  font-size: 12px;
  font-family: "GalanoGrotesqueRegular";
  margin-top: 5px;
`;

export const DetailsInfoCard = styled.View`
  width: 179px;
  height: 49px;
  border-radius: 7px;
  border-width: 1px;
  border-color: #868686;
  margin-top: 5px;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;

export default CardDetail;

