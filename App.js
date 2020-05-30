import React, { useState } from "react";

import styled from "styled-components";
import AuthScreen from "./Screens/AuthScreen/AuthScreen";
import MoviesScreen from "./Screens/MoviesScreen/MoviesScreen";

const Root = styled.View`
  flex: 1;
  justify-content: center;
`;

const App = () => {
  const [isLogin, setIsLogin] = useState();

  return (
    <Root>
      {!isLogin ? (
        <MoviesScreen></MoviesScreen>
      ) : (
        <AuthScreen isLogin={isLogin} setIsLogin={setIsLogin}></AuthScreen>
      )}
    </Root>
  );
};

export default App;
