import React, { useState, useEffect } from "react";
import {
  HomeContainer,
  HomeTitleUser,
  HomeSensors,
  HomeCard,
  HomeCardTitle,
} from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { auth, db } from '../../libs/firebase';
import { ref, onValue } from "firebase/database";
import {Image} from "react-native";
import buttonAdd from "../../../assets/images/button-add.png"
import CardSensor from "../../components/CardSensor";

const Home = ({ navigation }) => {
  const [dataStorage, setDataStorage] = useState({});
  const [listBox, setListBox] = useState([]);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("data_user");
      setDataStorage(jsonValue != null ? JSON.parse(jsonValue) : null);
      
    } catch (e) {
      console.error(e);// error reading value
    }
  };

  const setData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("data_user", jsonValue);
    } catch (e) {
      console.error(e);// saving error
    }
  };


  const addSensor = () => {
    setData({ ...dataStorage, nameBox: "", idBox: "", categories: "" });
    navigation.navigate("Plan");
  }

  useEffect(() => {
    // Récupération des données utilisateurs 
    getData();

    auth.onAuthStateChanged((user) => {
      if (user) {
        // read user
        onValue(ref(db, `/users/${auth.currentUser.uid}`), (snapshot) => {
          setListBox([]);
          const data = snapshot.val();

          if (data !== null) {
            if (data.user.sensors !== undefined) {
            Object.values(data.user.sensors).map((todo) => {
              setListBox((oldArray) => [...oldArray, todo]);
            });
            }
          }
        });
      } else if (!user) {
        navigation.navigate("Connexion");
      }
    });
  }, [])


  return (
    <HomeContainer>
      <HomeTitleUser>Mes Box</HomeTitleUser>
      <HomeSensors>
        {listBox
          ? listBox.map((item, key) => {
              return (
                <CardSensor
                  key={key}
                  text={item.id}
                  onPress={() =>
                    navigation.navigate("Details", { sensorsId: item.id })
                  }
                />
              );
            })
          : ""}

        <HomeCard
          onPress={() => {
            addSensor();
          }}
        >
          <Image source={buttonAdd} />
          <HomeCardTitle>Ajouter une box</HomeCardTitle>
        </HomeCard>
      </HomeSensors>
    </HomeContainer>
  );
};

export default Home;