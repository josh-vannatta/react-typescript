import * as React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/about/AboutPage";
import { AuthorPage } from "./components/authors/AuthorPage";
import { Error404 } from "./components/Error404";

export class App extends React.Component {


   public render(): JSX.Element {
     return (
       <HashRouter>
         <Switch >
           <Route exact={true} path="/" name="home" component={HomePage}/>
           <Route name="about" path="/about" component={AboutPage}/>
           <Route name="authors" path="/authors" component={AuthorPage}/>
           <Redirect from="aboot" to="about" />
           <Route component={Error404} />
         </Switch>
       </HashRouter>
     );
   }

}
