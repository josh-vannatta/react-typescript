import * as React from 'react';

import { Layout } from "../common/Layout";

export class AboutPage extends React.Component {
  private techStack = [
    'React', 'React Router', 'Flux', 'Node', 'Gulp', 'Browserify', 'Bootstrap'
  ]

  public render():JSX.Element {
    return (
      <Layout body={
        <div className="p-5">
          <h1>About</h1>
          <p>This page uses the following technologies:</p>
          <ul>
            { this.techStack.map((tech, i)=><li key={i}>{ tech }</li>) }
          </ul>
        </div>
      } />
    );
  }
}
