import * as React from 'react';

import { NavLinks } from "./NavLinks";

export interface LayoutProps { body: JSX.Element }
export class Layout extends React.Component <LayoutProps, {}> {
  constructor(props) {
    super(props);
  }
  public render(): JSX.Element {
    return(
      <div className="app-container">
        <NavLinks />
        { this.props.body }
      </div>
    )
  }
}
