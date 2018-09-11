import * as React from 'react';
import { Link } from "react-router-dom";
import { Layout } from "./common/Layout";

export class HomePage extends React.Component {
  public render():JSX.Element {
    return (
      <Layout body={
        <div className="jumbotron">
          <h1>Pluralsight Admin</h1>
          <p>React, React router, Flux</p>
          <Link className="btn btn-primary" to="about">Learn More</Link>
        </div>
      } />
    );
  }
}
