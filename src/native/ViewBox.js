import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateData } from "../features";
import getDataFromTinkoff from "../tinkoff";
import dataSelector from "../selectors";

import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Text
} from "native-base";
import { StyleSheet, View } from "react-native";
import Data from "./Data";

const ViewBox = () => {
  const dispatch = useDispatch();

  const handleClickGetData = () => {
    getDataFromTinkoff(dispatch, updateData);
  };

  const handleClickClearData = () => {
    dispatch(updateData(null));
  };

  return (
    <Container>
      <Content>
        <View style={styles.container}>
          <Text>Tinkoff API</Text>
          <Data />
        </View>
      </Content>
      <Footer>
        <FooterTab>
          <Button active onPress={handleClickGetData}>
            <Text>Get Data</Text>
          </Button>
          <Button onPress={handleClickClearData}>
            <Text>Clear</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20
  }
});

export default ViewBox;
