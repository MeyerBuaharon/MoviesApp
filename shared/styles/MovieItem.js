import React, { useState } from "react";
import styled from "styled-components";
import { View, Text, Image, TouchableOpacity } from "react-native";

const Root = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  padding: 12px;
  border: 1px solid black;
`;

const PosterIcon = styled.Image`
  width: 50px;
  height: 50px;
`;

const MovieTitle = styled.Text`
  padding: 6px;
  font-weight: 400;
  font-size: 16px;
`;

const MovieItem = ({ id, poster_path, title, setModalVisible, setModalId }) => {
  return (
    <Root
      onPress={() => {
        setModalVisible(true);
        setModalId(id);
      }}
    >
      <PosterIcon
        source={{
          uri: `https://image.tmdb.org/t/p/w220_and_h330_face${poster_path}`,
        }}
      ></PosterIcon>
      <MovieTitle>{title}</MovieTitle>
    </Root>
  );
};
export default MovieItem;
