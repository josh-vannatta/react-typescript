import * as React from "react";
import { Link } from "react-router-dom";

import { AuthorList } from "./AuthorList";
import { AuthorActions } from "../AuthorActions";
import { Layout } from "../../common/Layout";
import { dispatch } from '../../dispatcher';

export interface AuthorPageProps { authors, actions }
class AuthorPageRef extends React.Component<AuthorPageProps, {}> {

  public render(): JSX.Element {
    return (
      <Layout body={
        <div className="p-5">
          <AuthorList authors={this.props.authors} delete={author=>this.props.actions.deleteAuthor(author)}/>
          <Link className="btn btn-primary" to="add-author"> Add new author</Link>
        </div>
      } />
    );
  }

}

export const AuthorPage = dispatch(AuthorPageRef, {
  actions: AuthorActions, state: ['authors']
})
