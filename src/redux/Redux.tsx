// Bootstrap
import "lodash";
import "bootstrap";

// Core libraries
import * as React from "react";
import { createStore } from 'redux';

// Connect to db / api's
import AuthorApi from "./api/AuthorApi";

// Create redux store
import rootReducer from './app/reducers';
const store = createStore(rootReducer, {
  courses: [],
  authors: AuthorApi.getAllAuthors()
})

// Instantiate app
import { App } from "./BrowserRouter";
class ReduxTutorial extends React.Component {
  public render(): JSX.Element {
    return ( <App />);
  }
}

export { ReduxTutorial, store }
