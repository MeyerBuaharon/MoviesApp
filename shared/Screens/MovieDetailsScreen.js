import React from "react";
import styled from "styled-components";
import { Text } from "react-native";
import { useDispatch } from "react-redux";
import actions from "../store/actions";

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
  background: #fe434c;
  border-radius: 10px;
  width: 100%;
  height: 40px;
`;

const MovieDetailsScreen = ({
  id,
  setModalVisible,
  original_title,
  overview,
  poster_path,
  release_date,
}) => {
  const dispatch = useDispatch();

  const addToFavorite = async () => {
    const data = {
      id: id,
      original_title: original_title,
      overview: overview,
      poster_path: poster_path,
    };
    dispatch(actions.addToFavorites(data));
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
      <AddToFavorite
        style={{ elevation: 2 }}
        onPress={() => {
          addToFavorite();
          setModalVisible(false);
        }}
      >
        <Text>Move To Favorite</Text>
      </AddToFavorite>
    </Root>
  );
};
export default MovieDetailsScreen;
