import { ActionTypes } from "../../constants/ActionTypes";
import AuthorApi from "../../api/AuthorApi";
import * as _ from 'lodash';

export class AuthorActions {
  public static getAuthorById(authors, id): any {
    return _.find(authors, {id: id});
  }

  public loadAuthors():any {
    let _this = this;
    return function(dispatch) {
      return AuthorApi.getAllAuthors()
        .then(authors => dispatch(_this.authorsLoaded(authors))
      );
    }
  }

  public authorsLoaded(authors) {
    return {
      type: ActionTypes.AUTHORS_LOADED,
      authors: authors
    }
  }

  public createAuthor(author) {
    AuthorApi.saveAuthor(author);
    author.id = author.firstName + '-' + author.lastName;
    return {
      type: ActionTypes.CREATE_AUTHOR,
      author: author
    }
  }

  public deleteAuthor(author) {
    AuthorApi.deleteAuthor(author.id);
    return {
      type: ActionTypes.DELETE_AUTHOR,
      author: author
    }
  }

  public updateAuthor(author) {
    return {
      type: ActionTypes.UPDATE_AUTHOR,
      author: author
    }
  }

}
