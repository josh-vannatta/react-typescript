import * as React from 'react';

import { CourseListRow } from './CourseListRow';

export interface CourseListProps { courses }
export class CourseList extends React.Component <CourseListProps, {}> {
   public render(): JSX.Element {
     return (
       <table className="table">
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th>Title</th>
              <th>Author</th>
              <th>Category</th>
              <th>Length</th>
            </tr>
          </thead>
          <tbody>
           { this.props.courses.map(course =>
             <CourseListRow key={course.id} course={course}/>
           )}
          </tbody>
        </table>
     )
   }
}
