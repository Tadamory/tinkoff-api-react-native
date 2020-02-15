import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateData } from "../features";
import getDataFromTinkoff from "../tinkoff";
import dataSelector from "../selectors";

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";



const ViewBox = () => {
  const dispatch = useDispatch();
  const data = useSelector(dataSelector);

  const handleClick = () => {
    getDataFromTinkoff(dispatch, updateData);
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
