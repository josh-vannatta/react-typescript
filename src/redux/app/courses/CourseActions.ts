import { ActionTypes } from '../../constants/ActionTypes';
import CourseApi from '../../api/CourseApi';

export class CourseActions {
  public static instance = self;

  public static getCourseById(courses, id) {
    let course = courses.filter(course => course.id == id);
    if (course.length > 0) return course[0];
    return null;
  }

  public createCourseSuccess(course): Object {
    return {
      type: ActionTypes.CREATE_COURSE,
      course: course
    }
  }

  public updateCourseSuccess(course): Object {
    return {
      type: ActionTypes.UPDATE_COURSE,
      course: course
    }
  }

  public saveCourse(course) {
    let _this = this;
    return function(dispatch) {
      return CourseApi.saveCourse(course)
        .then(savedCourse => {
          if (course.id == '') dispatch(_this.createCourseSuccess(savedCourse));
          else dispatch(_this.updateCourseSuccess(savedCourse));
        })
        .catch(error => {
          throw(error);
        })
    }
  }

  public loadCoursesSuccess(courses) {
      return {
        type: ActionTypes.LOAD_COURSES_SUCCESS,
        courses: courses
      }
  }

  public loadCourses(): any {
    let _this = this;
    return function(dispatch) {
      return CourseApi.getAllCourses()
        .then(courses => {
          dispatch(_this.loadCoursesSuccess(courses));
        })
        .catch(error => {
          throw(error);
        })
    }
  }
}
