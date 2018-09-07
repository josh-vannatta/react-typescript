import * as React from "react";

export interface HelloProps { name: string; }
export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return (
          <div>
            <h1>Hello, {this.props.name}</h1>
            <p>The app is working!</p>
          </div>
        );
    }
}
