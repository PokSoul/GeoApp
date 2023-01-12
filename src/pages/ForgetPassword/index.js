import React, {useState} from "react";
import { Container, ContainerTitle, ContainerText, ArrowBack } from "./style";
import Input from '../../components/Input'
import Button from '../../components/Button'

import Arrow from '../../../assets/images/arrow-back.png';
import { View, Image, StyleSheet } from "react-native";
import { db, auth } from "../../libs/firebase";
import { sendPasswordResetEmail } from "firebase/auth";

const ForgetPassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  
  const forgotPassword = (Email) => {
    sendPasswordResetEmail(auth, Email, null)
      .then(() => {
        alert("Nous vous avons envoyer un message sur votre boite mail");
        navigation.navigate("Connexion");
      })
      .catch(function(e) {
        console.log(e);
      });
  };

  return (
    <Container>
      <ArrowBack onPress={() => navigation.navigate("Connexion")}>
        <Image source={Arrow} />
      </ArrowBack>
      <ContainerTitle>Mot de passe oublié</ContainerTitle>
      <ContainerText>
        Veuillez saisir votre adresse mail pour renitialiser votre mot de passe{" "}
      </ContainerText>
      <Input
        label="Email"
        value={email}
        condition={email?.email?.includes("@")}
        onChangeText={(newEmail) => {
          setEmail({ email: newEmail });
        }}
      />
      <Button text="Envoyez" onPress={() => forgotPassword(email?.email)} />
    </Container>
  );
};

export default ForgetPassword;
