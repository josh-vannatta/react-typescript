import * as React from 'react';

import { CreateCourse } from './CreateCourse';
import { Layout } from "../../common/Layout";
import { dispatch } from '../../dispatcher';
import { CourseActions } from '../CourseActions';

export interface CoursesPageProps { courses, actions }
class CoursesPageRef extends React.Component <CoursesPageProps, {}> {
  state  = {
    course: { title: '' }
  }
  
  constructor(props, context) {
    super(props, context);
  }

  private handleSave(event) {
    event.preventDefault();
    this.props.actions.createCourse(this.state.course);
    this.setState({
      course: { title: '' }
    });
  }

  private handleTitleChange(event) {
    this.setState({
      course: {title: event.target.value}
    })
  }

  private courseRow(course, index) {
    return (
      <div key={index}> { course.title }</div>
    )
  }

   public render(): JSX.Element {
     return (
       <Layout body={
         <div className="p-5">
           <h1>Courses</h1>
           {this.props.courses.map(this.courseRow)}
           <h2>Add course</h2>
           <CreateCourse
             onSave={e=>this.handleSave(e)}
             onTitleChange={e=>this.handleTitleChange(e)}
             title={this.state.course.title} />
           </div>
       } />
     )
   }
}

export const CoursesPage = dispatch( CoursesPageRef, {
  actions: CourseActions, state: ['courses']
})
