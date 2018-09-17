import { ActionTypes } from '../../constants/ActionTypes';
import * as _ from 'lodash';

class AuthorsReducer {
  public static createAuthor(authors, action) {
    return [...authors, Object.assign({}, action.author)];
  }

  public static updateAuthor(authors, action) {
    let author = _.find(authors, {id: action.author.id});
    authors.splice(authors.indexOf(author), 1, action.author);
    return authors;
  }

  public static deleteAuthor(authors, action) {
    _.remove(authors, { id: action.author.id});
    return authors;
  }
}

export function authorsReducer(authors = [], action) {
  switch (action.type) {
    case ActionTypes.AUTHORS_LOADED:
      return action.authors;
    case ActionTypes.CREATE_AUTHOR:
      return AuthorsReducer.createAuthor(authors, action)
    case ActionTypes.UPDATE_AUTHOR:
      return AuthorsReducer.updateAuthor(authors, action)
    case ActionTypes.DELETE_AUTHOR:
      return AuthorsReducer.deleteAuthor(authors, action)
    default: return authors;
  }
}
