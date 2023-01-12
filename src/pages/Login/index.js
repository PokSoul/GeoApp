import React, {useState, useEffect} from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth, provider } from "../../libs/firebase";
import {
  View,
  Text,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import {
  LoginFormContainer,
  LoginFormButton,
  ForgetPassword,
  ForgetPasswordText,
  ButtonGoogle,
  ButtonFacebook,
  ButtonText,
} from "./style";

import imgGoogle from '../../../assets/images/google.png'
import imgFacebook from "../../../assets/images/Facebook.png";
import Input from "../../components/Input/index";
import Button from "../../components/Button/index"

const LoginForm = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true)

  // Check if the user already has an account
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Home");
      }
    });
  }, []);



  const SignUpWithGoole = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email.email, password.password)
      .then(() => {
        navigation.navigate("Home");
      })
      .catch((err) => console.log(err.message));
  }

  

  return (
    <LoginFormContainer>
      <Input
        label="Email"
        type="email"
        placeholder="Username@gmail.com"
        value={email}
        condition={email?.email?.length > 0}
        onChangeText={(mail) => {
          setEmail({ email: mail });
        }}
        style={{
          marginTop: "55%",
        }}
      />
      <Input
        label="Mot de passe"
        secureTextEntry={showPassword}
        type="password"
        showPassword={() => setShowPassword(!showPassword)}
        value={password}
        condition={password?.password?.length > 5}
        onChangeText={(password) => {
          setPassword({ password: password });
        }}
      />
      <ForgetPassword onPress={() => navigation.navigate("forgetPassword")}>
        <ForgetPasswordText>Mot de passe oublié</ForgetPasswordText>
      </ForgetPassword>

      <Button onPress={() => handleLogin()} text="Me connecter" />
      <LoginFormButton onPress={() => navigation.navigate("M'inscrire")}>
        Pas de compte Je m’inscris
      </LoginFormButton>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 30,
          marginBottom: 20,
        }}
      >
        <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
        <View>
          <Text style={{ width: 50, textAlign: "center" }}>Ou</Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
      </View>
      <ButtonGoogle onPress={() => SignUpWithGoole()}>
        <Image source={imgGoogle} style={{ width: 34, height: 34 }} />
        <ButtonText>Me connecter avec google</ButtonText>
      </ButtonGoogle>
      <ButtonFacebook>
        <Image source={imgFacebook} style={{ width: 34, height: 34 }} />
        <ButtonText>Me connecter facebook</ButtonText>
      </ButtonFacebook>
    </LoginFormContainer>
  );
};

export default LoginForm;
