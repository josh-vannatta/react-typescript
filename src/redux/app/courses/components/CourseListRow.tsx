import * as React from 'react';
import { Link } from 'react-router-dom';

export interface CourseListRowProps { course }
export class CourseListRow extends React.Component <CourseListRowProps, {}> {
   public render(): JSX.Element {
     let course = this.props.course;
     return (
        <tr>
          <td><a href={course.watchHref} target="_blank">Watch</a></td>
          <td><Link to={'/course/' + course.id}>{course.title}</Link></td>
          <td>{course.authorId}</td>
          <td>{course.category}</td>
          <td>{course.length}</td>
        </tr>
     )
   }
}
