import * as React from 'react';
import { Redirect, Prompt } from 'react-router-dom';
import { Layout } from '../common/Layout';
import { AuthorForm } from "./AuthorForm";
import AuthorApi from "../../api/AuthorApi";

export class ManageAuthorsPage extends React.Component {
  private title = 'Create new author';
  public state = {
    author: {
      id: '',
      firstName: '',
      lastName: ''
    },
    authorSaved: false,
    dirty: false,
    invalid: false,
    errors: {}
  }

  constructor(props) {
    super(props);
    let activeAuthor = props.match.params.id;
    if (activeAuthor) {
      activeAuthor = AuthorApi.getAuthorById(activeAuthor);
      this.title = 'Edit author';
      this.state.author = {
        id: activeAuthor.id,
        firstName: activeAuthor.firstName,
        lastName: activeAuthor.lastName
      }
    }
  }

  private updateAuthor(e: React.ChangeEvent<HTMLInputElement>): void {
    this.state.author[e.target.name] = e.target.value;
    this.setState({ author: this.state.author, dirty: true });
    if (this.state.invalid) this.formValid();
  }

  private onSaveAuthor(e: HTMLFormElement): void {
    e.preventDefault();
    if (!this.formValid()) return;
    AuthorApi.saveAuthor(this.state.author);
    this.setState({ authorSaved: true, dirty: false });
  }

  private formValid(): boolean {
    this.state.errors = {};
    if (this.state.author.firstName.length < 3) {
      this.state.errors['firstName'] = 'First name must be at least 3 characters'
    }
    if (this.state.author.lastName.length < 3) {
      this.state.errors['lastName'] = 'Last name must be at least 3 characters'
    }
    this.setState({errors: this.state.errors, invalid: true });
    return Object.keys(this.state.errors).length == 0;
  }

   public render(): JSX.Element {
     if (this.state.authorSaved)
       return <Redirect to="/authors" />;
     return (
       <Layout body={
         <div className="p-5">
           <Prompt
             when={this.state.dirty}
             message={()=>'Leave page and lose your progress?'} />
           <h1>{this.title}</h1>
           <AuthorForm
             author={this.state.author}
             update={e=> this.updateAuthor(e)}
             onSave={e=>this.onSaveAuthor(e)}
             errors={this.state.errors}
           />
           <p className="mt-3">
             {this.state.author.firstName} &nbsp;
             {this.state.author.lastName}
           </p>
         </div>
       } />
     );
   }

}
