import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components";
import * as Google from "expo-google-app-auth";
import blankProfile from "../../assets/blankProfile.png";
import { GoogleButton } from "../../shared/styles";
import { REACT_APP_API_KEY } from "react-native-dotenv";

const Container = styled.View`
  flex: 1;
  background: #fff;
  align-items: center;
`;

const WelcomeText = styled.Text`
  font-size: 20px;
  text-align: center;
`;
const ProfilePicture = styled.Image`
  margin: 12px;
  width: 250px;
  height: 250px;
  border-radius: 250px;
`;

const Root = styled.View`
  flex: 1;
  justify-content: center;
`;

const AuthScreen = ({ isLogin, setIsLogin }) => {
  const [name, setName] = useState();
  const [profilePic, setProfilePic] = useState();
  const signIn = useCallback(async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId:
          "780657892357-pm3s4eso6hukolr73aj6j29of8oqhcvj.apps.googleusercontent.com",

        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        setIsLogin(true);
        setProfilePic(result.user.photoUrl);
        setName(result.user.name);
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  }, []);
  const LoginScreen = () => (
    <Root>
      <WelcomeText>Welcome, {name ? name : "Stranger"}</WelcomeText>
      <ProfilePicture
        source={
          profilePic
            ? {
                uri: profilePic,
              }
            : blankProfile
        }
      />
      {!isLogin && <Text>please log in to continue the awesomness</Text>}
      <GoogleButton text="Sign in with google" onPress={signIn}></GoogleButton>
    </Root>
  );
  return (
    <Container>
      <LoginScreen></LoginScreen>
    </Container>
  );
};

export default AuthScreen;
