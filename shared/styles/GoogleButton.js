import styled from "styled-components";
import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import GoogleSvg from "../../assets/google.png";

const GoogleIcon = styled.Image`
  width: 24px;
  height: 24px;
  position: relative;
  margin-top: 5px;
  margin-right: 20px;
  margin-left: 5px;
`;

const LoginBtn = styled.TouchableOpacity`
  position: relative;
  border: none;
  text-align: left;
  font-size: 16px;
  color: #fff;
  elevation: 2;
`;
const GoogleLoginText = styled.Text`
  color: #757575;
  font-size: 22px;
  font-family: Roboto;
`;
const GoogleLoginButton = styled(LoginBtn)`
  background: #eee;
  left: 0;
  display: flex;
  flex-direction: row;
`;

const GoogleButton = ({ text, onPress }) => (
  <GoogleLoginButton onPress={() => onPress()}>
    <GoogleIcon source={GoogleSvg}></GoogleIcon>
    <GoogleLoginText>{text}</GoogleLoginText>
  </GoogleLoginButton>
);

export default GoogleButton;
