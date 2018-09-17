import * as React from 'react';
import { Link } from 'react-router-dom';

import { Layout } from "../../common/Layout";
import { dispatch } from '../../dispatcher';
import { CourseActions } from '../CourseActions';
import { CourseList } from './Courselist';

export interface CoursesPageProps { courses, actions }
class CoursesPageRef extends React.Component <CoursesPageProps, {}> {
  state  = {
    course: { title: '' }
  }

  constructor(props, context) {
    super(props, context);
  }

   public render(): JSX.Element {
     const { courses } = this.props;

     return (
       <Layout body={
         <div className="p-5">
           <h1>Courses</h1>
           <CourseList courses={courses} />
           <Link className="btn btn-primary" to="add-course"> Add new course</Link>
           </div>
       } />
     )
   }
}

export const CoursesPage = dispatch(
  CoursesPageRef, {
    actions: CourseActions,
    state: ['courses']
  }
)
