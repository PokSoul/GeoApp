import { View, Text, Animated } from "react-native";
import {
  Container,
  ContainerCircle,
  ContainerImg,
  ContainerText,
} from "./style";
import React, { useState, useEffect } from "react";
import Box from '../../../assets/images/img-tall-sensor.png'

function Loading({navigation}) {
  const [pulseValue] = useState(new Animated.Value(1));

  const pulse = () => {
    Animated.sequence([
      Animated.timing(pulseValue, {
        toValue: 1.2,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(pulseValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => pulse());
  };

  useEffect(() => {
    pulse();
    setTimeout(() => {
      navigation.navigate("Home");
    }, 8000)
  }, []);

  return (
    <Container>
      <Animated.View
        style={{
          transform: [{ scale: pulseValue }],
        }}
      >
        <ContainerCircle></ContainerCircle>
      </Animated.View>
      <ContainerImg source={Box} />
      <ContainerText>Configuration de votre box en cours....</ContainerText>
    </Container>
  );
}
export default Loading;
