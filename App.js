import React, { useState } from "react";

import styled from "styled-components";
import { Button } from "react-native";

import { Provider } from "react-redux";
import store from "./shared/store";
import AuthScreen from "./Screens/AuthScreen/AuthScreen";
import MoviesScreen from "./Screens/MoviesScreen/MoviesScreen";

import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import FavoriteScreen from "./Screens/FavoriteScreen/FavoriteScreen";
import { PersistGate } from "redux-persist/integration/react";

const Drawer = createDrawerNavigator();

const Root = styled.View`
  flex: 1;
  justify-content: center;
`;

const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  const createHomeStack = () => (
    <AuthScreen isLogin={isLogin} setIsLogin={setIsLogin}></AuthScreen>
  );
  return (
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <NavigationContainer>
          <Drawer.Navigator
            initialRouteName="Home"
            drawerContent={(props) => {
              return (
                <DrawerContentScrollView>
                  <DrawerItemList {...props}></DrawerItemList>
                  {isLogin && (
                    <DrawerItem
                      label="Logout"
                      onPress={() => setIsLogin(false)}
                    />
                  )}
                </DrawerContentScrollView>
              );
            }}
          >
            <Drawer.Screen
              name="home"
              component={createHomeStack}
            ></Drawer.Screen>
            {isLogin && (
              <>
                <Drawer.Screen
                  name="Movies"
                  component={MoviesScreen}
                ></Drawer.Screen>
                <Drawer.Screen
                  name="Favorites"
                  component={FavoriteScreen}
                ></Drawer.Screen>
              </>
            )}
          </Drawer.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
