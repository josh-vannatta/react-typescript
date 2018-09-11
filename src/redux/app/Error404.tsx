import * as React from 'react';
import { Link } from "react-router-dom";
import { Layout } from "./common/Layout";

export class Error404 extends React.Component {
  public render():JSX.Element {
    return (
      <Layout body={        
        <div className="p-5">
          <h1>Uh oh! Page not found</h1>
          <p>It looks like you made a wrong turn</p>
          <Link className="btn btn-primary" to="home">Take me home</Link>
        </div>
      } />
    );
  }
}
