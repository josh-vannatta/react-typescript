import * as React from 'react';
import { Redirect } from 'react-router-dom';

import { CourseActions } from '../CourseActions';
import { dispatch } from '../../dispatcher';
import { Layout } from '../../common/Layout';
import { CourseForm } from './CourseForm';

export interface ManageCoursePageProps { course, courses, authors, actions }
export class ManageCoursePageRef extends React.Component <ManageCoursePageProps, {}> {
  private title = 'Create new course';
  public state = {
    course: Object.assign({}, this.props.course),
    courseSaved: false,
    dirty: false,
    invalid: false,
    errors: {},
    isLoading: false
  }

  constructor(props) {
    super(props);
    this.loadCourse(props);
  }

  componentWillReceiveProps(props) {
    this.loadCourse(props);
  }

  private loadCourse(props) {
    if (props.match.params.id && props.courses.length > 0) {
      this.state.course = CourseActions.getCourseById(
        props.courses,
        props.match.params.id
      );
      this.title = 'Edit course: ' + this.state.course.title;
    }
  }

  private saveCourse(e) {
    e.preventDefault();
    this.props.actions.saveCourse(this.state.course);
    this.setState({
      courseSaved: true
    })
  }

  private handleChange(e) {
    let course = Object.assign({}, this.state.course);
    course[e.target.name] = e.target.value;
    this.setState({ course: course });
  }

  public render(): JSX.Element {
    if (this.state.courseSaved)
      return <Redirect to="/courses" />

    return <Layout body={
      <div className="p-5">
         <h1>{this.title}</h1>
         <CourseForm
           course={this.state.course}
           allAuthors={this.props.authors}
           onSave={(e)=>this.saveCourse(e)}
           onChange={(e)=>this.handleChange(e)}
           errors={this.state.errors}
           loading={this.state.isLoading}/>
       </div>
     }/>
   }
}

const prepareCourse = {
  id: '', watchHref: '', title: '', authorId: '', length: '', category: ''
}

const prepareAuthors = authors => authors.map(author => ({
    value: author.id,
    text: author.firstName + ' ' + author.lastName,
  })
);

export const ManageCoursePage = dispatch(
  ManageCoursePageRef, {
    actions: CourseActions,
    state: state => ({
      course: prepareCourse,
      courses: state.courses,
      authors: prepareAuthors(state.authors)
    })
  }
)
