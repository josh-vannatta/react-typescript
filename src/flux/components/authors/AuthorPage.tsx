import * as React from "react";
import { Link } from "react-router-dom";
import { authorStore } from "../../stores/AuthorStore";

import AuthorList from "./AuthorList";
import { Layout } from "../common/Layout";

export class AuthorPage extends React.Component {
  state = {
    authors: authorStore.getAllAuthors()
  }

  public componentWillMount() {
    authorStore.addChangeListener(()=>this.onChange());
  }

  public componentWillUnmount() {
    authorStore.addChangeListener(()=>this.onChange());
  }

  private onChange() {
    this.setState({
      authors: authorStore.getAllAuthors()
    })
  }

  public render(): JSX.Element {
    return (
      <Layout body={
        <div className="p-5">
          <AuthorList authors={this.state.authors} />
          <Link className="btn btn-primary" to="add-author"> Add new author</Link>
        </div>
      } />
    );
  }
}
