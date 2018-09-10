import { dispatcher } from "../dispatcher";
import { ActionTypes } from "../constants/ActionTypes";
import AuthorApi from "../api/AuthorApi";

export class InitializeActions {
  public static initApp() {
    dispatcher.dispatch({
      actionType: ActionTypes.INITIALIZE,
      initialData: {
        authors: AuthorApi.getAllAuthors()
      }
    })
  }
}
