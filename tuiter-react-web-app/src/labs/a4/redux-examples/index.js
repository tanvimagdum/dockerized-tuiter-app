


import React from "react";
import HelloReduxExampleComponent from "./hello-redux-example-component";
import hello from "./reducers/hello";
import todos from "./reducers/todos-reducer";
import au from "./reducers/reducer";
import { configureStore } from '@reduxjs/toolkit';
import Todos from "./todos-component";
import QJ from "./QJ";
import {Provider} from "react-redux";
const store = configureStore({ reducer: {hello, todos, au} });


const ReduxExamples = () => {
  return(
    <Provider store={store}>
      <div>
        <h2>Redux Examples</h2>
        <Todos/>
        <HelloReduxExampleComponent/>
        <QJ/>
      </div>
    </Provider>
  );
};

export default ReduxExamples;

