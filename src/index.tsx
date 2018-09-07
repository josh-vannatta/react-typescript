import * as React from "react";
import * as ReactDOM from "react-dom";

// Basic examples
import { Hello } from "./basic/Hello";
import { Counter } from "./basic/Counter";
import { GithubViewer } from "./basic/GithubViewer";

// Flux
import { FluxTutorial } from "./flux/Flux";

let mountNode = document.getElementById("app");
let activeExample = 'Flux';

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
}
