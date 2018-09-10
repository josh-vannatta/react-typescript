import "lodash";
import "bootstrap";

import * as React from "react";
import { InitializeActions } from "./actions/InitializeActions";
import { App } from "./BrowserRouter";

InitializeActions.initApp();

export class FluxTutorial extends React.Component {
  public render(): JSX.Element {
    return (  <App />  );
  }
}
