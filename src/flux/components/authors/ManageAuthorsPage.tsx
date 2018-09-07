import * as React from 'react';
import { Layout } from '../common/Layout';
import { AuthorForm } from "./AuthorForm";

export class ManageAuthorsPage extends React.Component {
  state = {
    author: {
      id: '',
      firstName: '',
      lastName: ''
    }
  }

  updateAuthor(e: React.ChangeEvent<HTMLInputElement>) {
    this.state.author[e.target.name] = e.target.value;
    this.setState({ author: this.state.author});
  }

  onSaveAuthor(e: HTMLFormElement) {
    e.preventDefault();
    console.log(`${this.state.author.firstName} ${this.state.author.lastName}`)
  }

   public render(): JSX.Element {
     return (
       <Layout body={
         <div className="p-5">
           <h1>Create author</h1>
           <AuthorForm
             author={this.state.author}
             update={e=> this.updateAuthor(e)}
             onSave={e=>this.onSaveAuthor(e)}
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
