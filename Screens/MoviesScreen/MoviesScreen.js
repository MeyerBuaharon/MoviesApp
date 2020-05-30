import React, { useState, useEffect } from "react";
import { ScrollView, Modal } from "react-native";
import styled from "styled-components";
import { getMovies } from "../../shared/api";
import { useDispatch, useSelector } from "react-redux";
import { MovieItem } from "../../shared/styles";
import MovieDetailsScreen from "../../shared/Screens/MovieDetailsScreen";
import actions from "../../shared/store/actions";
const Root = styled.View`
  background: #eee;
  margin-top: 30px;
`;

const Title = styled.Text`
  font-size: 20px;
  margin-bottom: 10px;
`;

const MoviesScreen = () => {
  const data = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalId, setModalId] = useState();
  const [choosenMovie, setChoosenMovie] = useState();

  useEffect(() => {
    dispatch(actions.fetchMovies());
  }, []);
  useEffect(() => {
    if (modalId) {
      setChoosenMovie(data.find((item) => item.id === modalId));
    }
  }, [setChoosenMovie, modalId, data]);
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
      <Title>Popular Movies</Title>
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

export default MoviesScreen;
