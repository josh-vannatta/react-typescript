import * as React from "react";

export class Navbar extends React.Component {
  public render(): JSX.Element {
    return (
      <nav className="navbar  navbar-expand-sm navbar-light bg-light z-depth-1">
        <a className="navbar-brand" href="#">
          <img src="assets/images/pluralsight_logo.png" height="40"/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ml-3" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active mr-2">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item mr-2">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item mr-2">
              <a className="nav-link" href="#authors">Authors</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
