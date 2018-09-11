import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { HomePage } from "./app/HomePage";
import { AboutPage } from "./app/about/AboutPage";
import { AuthorPage } from "./app/authors/components/AuthorPage";
import { ManageAuthorsPage } from "./app/authors/components/ManageAuthorsPage";
import { Error404 } from "./app/Error404";
import { CoursesPage } from "./app/courses/components/CoursesPage";

export class App extends React.Component {

   public render(): JSX.Element {
     return (
       <BrowserRouter>
        <Switch >
          <Route exact={true} path="/" name="home" component={HomePage}/>
          <Route name="about" path="/about" component={AboutPage}/>
          <Route name="authors" path="/authors" component={AuthorPage}/>
          <Route name="add-author" path="/add-author" component={ManageAuthorsPage}/>
          <Route name="manage-author" path="/author/:id" component={ManageAuthorsPage}/>
          <Route name="courses" path="/courses" component={CoursesPage}/>
          <Redirect from="/aboot" to="/about" />
          <Redirect from="/about/*" to="/about" />
          <Redirect from="/home" to="/" />
          <Route component={Error404} />
        </Switch>
      </BrowserRouter>
     );
   }

}
