import { ActionTypes } from "../../constants/ActionTypes";
import AuthorApi from "../../api/AuthorApi";
import * as _ from 'lodash';

export class AuthorActions {
  public static getAuthorById(authors, id): any {
    return _.find(authors, {id: id});
  }

  public createAuthor(author) {
    return {
      type: ActionTypes.CREATE_AUTHOR,
      author: AuthorApi.saveAuthor(author)
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
      author: AuthorApi.updateAuthor(author)
    }
  }

}
