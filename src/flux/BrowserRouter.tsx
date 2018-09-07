import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/about/AboutPage";
import { AuthorPage } from "./components/authors/AuthorPage";
import { ManageAuthorsPage } from "./components/authors/ManageAuthorsPage";
import { Error404 } from "./components/Error404";

export class App extends React.Component {

   public render(): JSX.Element {
     return (
       <BrowserRouter>
        <Switch >
          <Route exact={true} path="/" name="home" component={HomePage}/>
          <Route name="about" path="/about" component={AboutPage}/>
          <Route name="authors" path="/authors" component={AuthorPage}/>
          <Route name="add-author" path="/add-author" component={ManageAuthorsPage}/>
          <Redirect from="/aboot" to="/about" />
          <Redirect from="/about/*" to="/about" />
          <Redirect from="/home" to="/" />
          <Route component={Error404} />
        </Switch>
      </BrowserRouter>
     );
   }

}
