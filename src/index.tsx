import * as React from "react";
import * as ReactDOM from "react-dom";

// Basic examples
import { Hello } from "./basic/Hello";
import { Counter } from "./basic/Counter";
import { GithubViewer } from "./basic/GithubViewer";

// Flux
import { FluxTutorial } from "./flux/Flux";

// Redux
import { Provider } from "react-redux";
import { ReduxTutorial, store } from "./redux/Redux";

let mountNode = document.getElementById("app");
let activeExample = 'Redux';

switch (activeExample) {
  case 'Hello':
    ReactDOM.render(<Hello name="Josh" />, mountNode);
    break;
  case 'Counter':
    ReactDOM.render(<Counter />, mountNode);
    break;
  case 'GithubViewer':
    ReactDOM.render(<GithubViewer />, mountNode);
    break;
  case 'Flux':
    ReactDOM.render(<FluxTutorial />, mountNode);
    break;
  case 'Redux':
    ReactDOM.render(
      <Provider store={store}>
        <ReduxTutorial />
      </Provider>
    , mountNode);
    break;
}
