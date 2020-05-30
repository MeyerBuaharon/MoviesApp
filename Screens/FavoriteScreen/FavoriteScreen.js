import React, { useState, useEffect } from "react";
import {
  ScrollView,
  Modal,
  View,
  Text,
  TouchableHighlight,
} from "react-native";
import styled from "styled-components";
import axios from "axios";

import { MovieItem } from "../../shared/styles";
import MovieDetailsScreen from "../../shared/Screens/MovieDetailsScreen";

const Root = styled.View`
  background: #eee;
  margin-top: 90px;
`;

const Title = styled.Text`
  font-size: 20px;
  margin-bottom: 10px;
`;

const FavoriteScreen = () => {
  const [data, setData] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalId, setModalId] = useState();
  const [choosenMovie, setChoosenMovie] = useState();

  useEffect(() => {
    console.log("fetchedData");
    const fetchData = async () => {
      const result = await axios(
        "https://api.themoviedb.org/3/movie/popular/?api_key=c807c5adddcfff593a2d33533086273b"
      );

      setData(result.data.results);
    };

    fetchData();

    if (modalId) {
      setChoosenMovie(data.find((item) => item.id === modalId));
    }
  }, [modalId]);

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
        {data &&
          data.map((item) => (
            <MovieItem
              key={item.id}
              id={item.id}
              title={item.title}
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
