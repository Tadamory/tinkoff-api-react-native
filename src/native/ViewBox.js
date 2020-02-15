import React from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import { updateData } from "../actions";
import getDataFromTinkoff from "../tinkoff";
import dataSelector from "../selectors";

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

/*
async function getMoviesFromApi() {
  try {
    let response = await fetch(
      'https://facebook.github.io/react-native/movies.json',
    );
    let responseJson = await response.json();
    return responseJson.movies;
  } catch (error) {
    console.error(error);
  }
}
*/

const ViewBox = () => {
  const dispatch = useDispatch();
  const data = useSelector(dataSelector);

  const handleClick = () => {
    dispatch(updateData(getDataFromTinkoff()));
    //alert(JSON.stringify(getMoviesFromApi()));
    alert("dsgfsd");
  };

  return (
    <View style={styles.container}>
      <Text>Tinkoff API</Text>
      <Text></Text>
      <TouchableOpacity
        onPress={handleClick}
        style={{ backgroundColor: "blue" }}
      >
        <Text style={{ fontSize: 20, color: "#fff" }}>Get data</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default ViewBox;
