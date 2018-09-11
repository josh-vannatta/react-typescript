import * as React from 'react';
import { TextInput } from '../../common/TextInput';

export interface CreateCourseProps {onTitleChange, title: string, onSave}
export class CreateCourse extends React.Component <CreateCourseProps, {}> {
  constructor(props, context) {
    super(props, context);
  }

   public render(): JSX.Element {
     return (
        <form>
          <TextInput
            name="courseTitle"
            label="Course Title"
            value={this.props.title}
            onChange={this.props.onTitleChange}
          />
          <input
            type="submit"
            value="Save"
            onClick={this.props.onSave} />
        </form>
     )
   }
}
