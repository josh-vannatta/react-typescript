import * as React from 'react';
import { Link } from 'react-router-dom';
import { AuthorActions } from "../../actions/authorActions";

export interface AuthorListProps {
    authors: Array<Object>;
    category?: string;
}

export default class AuthorList extends React.Component<AuthorListProps, {}> {

  public static defaultProps: Partial<AuthorListProps> = {
    authors: [],
    category: "default"
  };

  private getAuthorRow(author) {
    return (
      <tr key={author.id}>
        <td scope="row">
          <Link to={"author/" + author.id} > {author.id}</Link>
        </td>
        <td>{author.firstName} {author.lastName}</td>
        <td><a href="#" onClick={()=>AuthorActions.deleteAuthor(author)}>Delete</a></td>
      </tr>
    );
  }

  public render(): JSX.Element {
    return (
      <div>
        <h1 >Authors: </h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            { this.props.authors.map(author => this.getAuthorRow(author))}
          </tbody>
        </table>
      </div>
    );
  }

}
