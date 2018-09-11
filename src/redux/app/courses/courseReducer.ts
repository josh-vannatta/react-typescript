import { ActionTypes } from '../../constants/ActionTypes';

export function courseReducer(courses = [], action) {
  switch (action.type) {
    case ActionTypes.CREATE_COURSE:
      return [...courses, Object.assign({}, action.course)]
    default: return courses;
  }
}
