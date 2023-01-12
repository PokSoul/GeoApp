import React, { useState, useEffect } from "react";
import { Animated } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Arrow from '../../../assets/images/arrow-back.png';
import Input from "../../components/Input";
import Button from "../../components/Button";

import {
  RegisterFormContainer,
  RegisterFormArrow,
  RegisterFormText,
  RegisterFormButtonBack,
} from "./style";


const RegisterForm = ({ navigation }) => {
  const [animation] = useState(new Animated.Value(0));
  const [registerInformation, setRegisterInformation] = useState({
    email: "",
    name: "",
    password: "",
    nickmane: "",
    categories: "",
    idBox: "",
    nameBox: "",
  });
  const [showPassword, setShowPassword] = useState(true);

  const setData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("data_user", jsonValue);
    } catch (e) {
      console.error(e);// saving error
    }
  };

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const interpolatedAnimationFade = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });
  const interpolatedAnimationSlide = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [30, 0],
  });

  const animatedStyles = {
    opacity: interpolatedAnimationFade,
    flex: 1,
    justifyContent: "start",
    backgroundColor: "white",
    alignItems: "center",
    transform: [{ translateY: interpolatedAnimationSlide }],
  };

  const nexPage = () => {
    // Check if the email is valid
    if (
      !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
        registerInformation.email
      )
    ) {
      alert("Please enter a valid email address and the same email adress");
      return;
    }

    // Check if the name
    if (registerInformation.name === "") {
      alert("Veuillez entrer votre prénom ");
      return;
    }

    // Check if the name
    if (registerInformation.nickmane === "") {
      alert("Veuillez entrer votre nom");
      return;
    }

    // Check if the password is at least 6 characters long
    if (registerInformation.password.length < 6) {
      alert("Please enter a password that is at least 6 characters long");
      return;
    }

    // If the email and password are valid, submit the form
    navigation.navigate("Plan");
    setData(registerInformation);
  };

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <RegisterFormContainer>
      <Animated.View style={animatedStyles}>
        <RegisterFormButtonBack
          onPress={() => navigation.navigate("Connexion")}
        >
          <RegisterFormArrow source={Arrow} />
        </RegisterFormButtonBack>

        <RegisterFormText>S’inscrire</RegisterFormText>

        <Input
          label="Prénom"
          placeholder="melvin"
          value={registerInformation.name}
          condition={registerInformation.name.length > 0}
          style={{ marginTop: 10 }}
          onChangeText={(value) =>
            setRegisterInformation({ ...registerInformation, name: value })
          }
        />
        <Input
          label="Nom"
          placeholder="DEBOT"
          value={registerInformation.nickmane}
          condition={registerInformation.nickmane.length > 0}
          onChangeText={(value) =>
            setRegisterInformation({
              ...registerInformation,
              nickmane: value,
            })
          }
        />
        <Input
          label="Email"
          placeholder="melvin@gmail.com"
          value={registerInformation.email}
          condition={registerInformation.email.includes("@")}
          onChangeText={(value) =>
            setRegisterInformation({ ...registerInformation, email: value })
          }
        />
        <Input
          label="Mot de passe"
          placeholder="6 charactere minimun"
          value={registerInformation.password}
          condition={registerInformation.password.length > 5}
          secureTextEntry={showPassword}
          type="password"
          showPassword={() => setShowPassword(!showPassword)}
          onChangeText={(value) =>
            setRegisterInformation({ ...registerInformation, password: value })
          }
        />

        <Button text="Suivant" onPress={() => nexPage()} />
      </Animated.View>
    </RegisterFormContainer>
  );
};

export default RegisterForm;
