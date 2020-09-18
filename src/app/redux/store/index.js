import { createStore } from "redux";

function reducers() {
  return {
    testing: 'algo'
  };
}

export default () => {
  return {
    ...createStore(reducers)
  };
};
