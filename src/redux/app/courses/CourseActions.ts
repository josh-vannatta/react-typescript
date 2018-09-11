import { ActionTypes } from '../../constants/ActionTypes';

export class CourseActions {
  public createCourse(course): Object {
    return {
      type: ActionTypes.CREATE_COURSE,
      course: course
    }
  }
}
