import React, {useState} from "react";
import {
  AccountContainer,
  AccountTitleUser,
  AccountButtonLogout,
} from "./style";
import { signOut, getAuth, updatePassword } from "firebase/auth";
import Button from "../../components/Button";
import Input from '../../components/Input';
import imgLogout from '../../../assets/images/logout.png';
import { Image } from "react-native";

const Account = ({ navigation }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const auth = getAuth();

  const handlePassword = () => {
    updatePassword(auth.currentUser, newPassword)
      .then(() => {
        console.log("password updated successfully");
      })
      .catch((error) => {
        // An error occurred
        console.error(error);
      });
  }

  

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigation.navigate("Connexion");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <AccountContainer>
      <AccountButtonLogout onPress={() => handleSignOut()}>
        <Image source={imgLogout} />
      </AccountButtonLogout>
      <AccountTitleUser>Paramètre</AccountTitleUser>

      <Input
        label="Email actuel"
        value={auth.currentUser.email}
        disabled={true}
      />

      <Input
        label="Ancien mot de passe "
        value={oldPassword}
        secureTextEntry={true}
        condition={oldPassword?.oldPassword?.length > 5}
        onChangeText={(password) => {
          setOldPassword({ oldPassword: password });
        }}
      />
      <Input
        label="Nouveau mot de passe "
        value={newPassword}
        secureTextEntry={true}
        condition={newPassword?.newPassword?.length > 5}
        onChangeText={(password) => {
          setNewPassword({ newPassword: password });
        }}
      />
      <Button text="Modifier mon email" onPress={() => handlePassword()} />
    </AccountContainer>
  );
};

export default Account;
