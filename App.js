import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import * as reducers from "./src/features";
import ViewBox from "./src/native/ViewBox";

const store = configureStore({
  reducer: { ...reducers },
  devTools: process.env.NODE_ENV !== "production"
});

const App = () => {
  return (
    <Provider store={store}>
      <ViewBox />
    </Provider>
  );
};

export default App;
