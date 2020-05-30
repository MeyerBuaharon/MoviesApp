import React from "react";
import styled from "styled-components";
import {
  View,
  TouchableHighlight,
  Text,
  Image,
  ScrollView,
  AsyncStorage,
} from "react-native";

const Root = styled.View`
  background: #fff;
  height: 100%;
  width: 100%;
  padding: 50px;
`;

const OriginalTitle = styled.Text`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 12px;
`;

const MoviePoster = styled.Image`
  width: 200px;
  height: 300px;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
`;

const ReleaseDate = styled.Text`
  font-weight: 700;
  font-size: 16px;
`;

const Overview = styled.ScrollView`
  height: 200px;
`;

const CloseModal = styled.TouchableHighlight`
  margin: 15px;
  right: 0;
  position: absolute;
  height: 20px;
  width: 20px;
`;

const ExitIcon = styled.Text`
  font-size: 18px;
`;

const AddToFavorite = styled.TouchableOpacity`
  margin-top: 10px;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 100%;
  background: #FE434C;
  border-radius: 10px;
  width: 100%;
  height: 40px;
}

`;

const MovieDetailsScreen = ({
  id,
  setModalVisible,
  original_title,
  overview,
  poster_path,
  release_date,
}) => {
  const addToFavorite = async () => {
    try {
      let arr = JSON.parse(await AsyncStorage.getItem("favorite")) || [];
      const data = {
        id: id,
        original_title: original_title,
        overview: overview,
        poster_path: poster_path,
      };
      if (arr.find((item) => item.id === id)) {
        arr.splice(
          arr.findIndex((i) => i.id === id),
          1
        );
      } else {
        arr.push(data);
      }

      await AsyncStorage.setItem("favorite", JSON.stringify(arr));
    } catch (e) {
      console.log("Error:", e);
    }

    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("favorite");
        if (value !== null) {
          console.log(value);
        }
      } catch (e) {
        // error reading value
      }
    };
    getData();
  };

  return (
    <Root>
      <CloseModal
        onPress={() => {
          setModalVisible(false);
        }}
      >
        <ExitIcon>X</ExitIcon>
      </CloseModal>

      <OriginalTitle>{original_title}</OriginalTitle>
      <MoviePoster
        source={{
          uri: `https://image.tmdb.org/t/p/w220_and_h330_face${poster_path}`,
        }}
      ></MoviePoster>
      <ReleaseDate>{`Release Date: ${release_date}`}</ReleaseDate>
      <Overview>
        <ReleaseDate>{`overview: ${overview}`}</ReleaseDate>
      </Overview>
      <AddToFavorite style={{ elevation: 2 }} onPress={() => addToFavorite()}>
        <Text>Add To Favorite</Text>
      </AddToFavorite>
    </Root>
  );
};
export default MovieDetailsScreen;
