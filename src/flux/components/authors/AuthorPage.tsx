import * as React from "react";
import { Link } from "react-router-dom";
import AuthorApi from "../../api/AuthorApi";
import AuthorList from "./AuthorList";
import { Layout } from "../common/Layout";

export class AuthorPage extends React.Component {
  state = {
    authors: []
  }

  public componentDidMount():void {
    this.setState({
      authors: AuthorApi.getAllAuthors()
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
