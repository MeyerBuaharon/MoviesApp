import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import styled from "styled-components";
import axios from "axios";

import { MovieItem } from "../../shared/styles";

const Root = styled.View`
  background: #eee;
  margin-top: 90px;
`;

const Title = styled.Text`
  font-size: 20px;
  margin-bottom: 10px;
`;

const MoviesScreen = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://api.themoviedb.org/3/movie/popular/?api_key=c807c5adddcfff593a2d33533086273b"
      );

      setData(result.data.results);
    };

    fetchData();
  }, []);

  return (
    <Root>
      <Title>Popular Movies</Title>
      <ScrollView>
        {data &&
          data.map((item) => (
            <MovieItem
              key={item.id}
              id={item.id}
              title={item.title}
              poster_path={item.poster_path}
            ></MovieItem>
          ))}
      </ScrollView>
    </Root>
  );
};

export default MoviesScreen;
