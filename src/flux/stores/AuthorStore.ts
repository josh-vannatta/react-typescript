import { dispatcher } from "../dispatcher";
import { ActionTypes } from "../constants/ActionTypes";
import { EventEmitter } from "events";
import * as _ from 'lodash';

let CHANGE_EVENT = 'change';
let authors = [];

class AuthorStore extends EventEmitter {

  public emitChange() {
    this.emit(CHANGE_EVENT);
  }

  public addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  public removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  public getAllAuthors() {
    return authors;
  }

  public getAuthorById(id) {
    return _.find(authors, {id: id});
  }

}

let authorStore = new AuthorStore();

dispatcher.register((action: { actionType, author, initialData })=>{
  let author;
  switch(action.actionType) {
    case ActionTypes.CREATE_AUTHOR:
      authors.push(action.author); break;
    case ActionTypes.UPDATE_AUTHOR:
      author = authorStore.getAuthorById(action.author.id);
      authors.splice(authors.indexOf(author), 1, action.author);
      break;
    case ActionTypes.DELETE_AUTHOR:
      _.remove(authors, { id: action.author.id});
      break;
    case ActionTypes.INITIALIZE:
      authors=action.initialData.authors; break;
    default:
  }
  authorStore.emitChange();
});

export { authorStore };
