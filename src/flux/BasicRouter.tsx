import * as React from "react";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/about/AboutPage";
import { AuthorPage } from "./components/authors/AuthorPage";
import { Navbar } from "./components/common/NavBar";

export interface AppProps { route: string; }
class App extends React.Component<AppProps, {}> {

  public render(): JSX.Element {
    switch(this.props.route) {
      case 'about': return <AboutPage />;
      case 'authors': return <AuthorPage />;
      default: return <HomePage />;
    }
  }

}

export class BasicRouting extends React.Component {
  state = {
    route: window.location.hash.substr(1)
  }

  constructor(props) {
    super(props);
    window.addEventListener('hashchange', ()=>this.handleRoute());
  }

  private handleRoute():void {
      this.setState({
        route: window.location.hash.substr(1)
      });
  }

  public render(): JSX.Element {
    return (
      <div>
        <Navbar />
        <App route={this.state.route}/>
      </div>
    );
  }
}
