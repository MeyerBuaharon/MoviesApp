import React, { useState, useEffect } from "react";
import {
  ScrollView,
  Modal,
  View,
  Text,
  TouchableHighlight,
  AsyncStorage,
} from "react-native";
import styled from "styled-components";
import axios from "axios";

import { MovieItem } from "../../shared/styles";
import MovieDetailsScreen from "../../shared/Screens/MovieDetailsScreen";
import { useSelector, useDispatch } from "react-redux";

const Root = styled.View`
  background: #eee;
  margin-top: 50px;
`;

const Title = styled.Text`
  font-size: 20px;
  margin-bottom: 10px;
`;

const FavoriteScreen = () => {
  const favorites = useSelector((state) => state.favorites);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalId, setModalId] = useState();
  const [choosenMovie, setChoosenMovie] = useState();
  useEffect(() => {
    if (modalId) {
      setChoosenMovie(favorites.find((item) => item.id === modalId));
    }
  }, [modalVisible, favorites, modalId]);
  return (
    <Root>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        {choosenMovie && (
          <MovieDetailsScreen
            id={choosenMovie.id}
            original_title={choosenMovie.original_title}
            overview={choosenMovie.overview}
            poster_path={choosenMovie.poster_path}
            release_date={choosenMovie.release_date}
            setModalVisible={setModalVisible}
          ></MovieDetailsScreen>
        )}
      </Modal>
      <Title>Favorite Movies</Title>
      <ScrollView>
        {favorites &&
          favorites.map((item) => (
            <MovieItem
              key={item.id}
              id={item.id}
              title={item.original_title}
              poster_path={item.poster_path}
              setModalVisible={setModalVisible}
              setModalId={setModalId}
            ></MovieItem>
          ))}
      </ScrollView>
    </Root>
  );
};

export default FavoriteScreen;
