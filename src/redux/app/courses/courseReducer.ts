import { ActionTypes } from '../../constants/ActionTypes';

export function courseReducer(courses = [], action) {
  switch (action.type) {
    case ActionTypes.CREATE_COURSE:
      return [
        ...courses,
        Object.assign({}, action.course)
      ];

    case ActionTypes.UPDATE_COURSE:
      return [
        ...courses.filter(course=>course.id !== action.course.id),
        Object.assign({}, action.course)
      ];

    case ActionTypes.LOAD_COURSES_SUCCESS:
      return action.courses;

    default: return courses;
  }
}
