import React, { Fragment } from "react";

import { Provider, useSelector } from "react-redux";
import storeFn from "./redux/store";

import Navbar from "./navbar/Navbar";
import "./App.css";

const store = storeFn();

function App(props) {
  const data = useSelector(state => {
    console.log("App/state: ", state);
  });
  console.log("App/props: ", props);
  return (
    <Fragment>
      <Provider store={store}>
        <Navbar />
      </Provider>
    </Fragment>
  );
}

export default App;
