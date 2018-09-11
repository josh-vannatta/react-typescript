import * as React from "react";
import { Link } from "react-router-dom";

export class NavLinks extends React.Component {
  public render(): JSX.Element {
    return (
      <nav className="navbar  navbar-expand-sm navbar-light bg-light z-depth-1">
        <Link className="navbar-brand" to="/home">
          <img src="/assets/images/pluralsight_logo.png" height="40"/>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ml-3" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active mr-2">
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item mr-2">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item mr-2">
              <Link className="nav-link" to="/authors">Authors</Link>
            </li>
            <li className="nav-item mr-2">
              <Link className="nav-link" to="/courses">Courses</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
