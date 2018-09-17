import * as React from 'react';
import { TextInput } from '../../common/TextInput';
import { SelectInput } from '../../common/SelectInput';

export interface CourseFormProps { course, allAuthors, onSave, onChange, loading, errors }
export class CourseForm extends React.Component <CourseFormProps, {}> {
   public render(): JSX.Element {
     const  { course, allAuthors, onSave, onChange, loading, errors } = this.props;
     return (
       <form onSubmit={this.props.onSave}>
         <TextInput
           name="title"
           label="Title"
           onChange={onChange}
           value={course.title}
           error={errors.title ? errors.title : false }/>

         <SelectInput
           name="authorId"
           label="Author"
           options={allAuthors}
           defaultOption="Select Author"
           onChange={onChange}
           value={course.authorId}
           error={errors.authorId ? errors.authorId : false }/>

         <TextInput
           name="category"
           label="Category"
           onChange={onChange}
           value={course.category}
           error={errors.category ? errors.category : false }/>

          <TextInput
            name="length"
            label="Length"
            onChange={onChange}
            value={course.length}
            error={errors.length? errors.length: false }/>

         <input type="submit"
            className="btn btn-primary"
            disabled={loading}
            value={loading ? 'Saving...' : 'Save'}
            onClick={onSave}/>
        </form>
     )
   }
}
