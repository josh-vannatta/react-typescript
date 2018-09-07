import * as React from 'react';
import { TextInput } from '../common/TextInput';

export interface AuthorFormProps { author, update, onSave }
export class AuthorForm extends React.Component <AuthorFormProps, {}> {
  constructor(props) {
    super(props);
  }

   public render(): JSX.Element {
     return (
       <form onSubmit={this.props.onSave}>

         <TextInput
           name="firstName"
           label="First name"
           onChange={this.props.update}
           value={this.props.author.firstName} />

         <TextInput
           name="lastName"
           label="Last name"
           onChange={this.props.update}
           value={this.props.author.lastName} />

         <button type="submit" className="btn btn-primary">Submit</button>
        </form>
     )
   }
}
