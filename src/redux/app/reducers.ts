import { combineReducers }  from 'redux';
import { courseReducer } from './courses/CourseReducer';
import { authorsReducer } from './authors/authorsReducer';

const rootReducer = combineReducers({
  courses: courseReducer,
  authors: authorsReducer
});

export default rootReducer;
