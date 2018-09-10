import { dispatcher } from "../dispatcher";
import { ActionTypes } from "../constants/ActionTypes";
import AuthorApi from "../api/AuthorApi";

export class AuthorActions  {

  public static createAuthor(author) {
    let newAuthor = AuthorApi.saveAuthor(author);

    dispatcher.dispatch({
      actionType: ActionTypes.CREATE_AUTHOR,
      author: newAuthor
    })
  }

  public static deleteAuthor(author) {
    AuthorApi.deleteAuthor(author.id);

    dispatcher.dispatch({
      actionType: ActionTypes.DELETE_AUTHOR,
      author: author
    })
  }

  public static updateAuthor(author) {
    let updatedAuthor = AuthorApi.saveAuthor(author);

    dispatcher.dispatch({
      actionType: ActionTypes.UPDATE_AUTHOR,
      author: updatedAuthor
    })
  }

}
