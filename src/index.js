import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import * as reducers from "./features";

import App from "./components/App";

const store = configureStore({
  reducer: { ...reducers },
  devTools: process.env.NODE_ENV !== "production"
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("form")
);
