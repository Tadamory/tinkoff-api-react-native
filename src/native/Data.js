import React from "react";
import { useSelector } from "react-redux";
import dataSelector from "../selectors";

import { StyleSheet, View, Text, FlatList } from "react-native";

const Data = () => {
  const state = useSelector(dataSelector);

  const renderElements = () => {
    if (!state || state === []) {
      return null;
    }

    const listItems = state.map(element => {
      const { name, currency } = element;
      return `${name} (${currency})`;
    });
    return listItems;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={renderElements()}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20
  }
});

export default Data;
