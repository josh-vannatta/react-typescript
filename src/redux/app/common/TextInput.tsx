import * as React from 'react';

export interface TextInputProps {
  onChange: Function,
  name: string,
  label: string,
  placeholder?: string,
  value?: string,
  error?: Array<string>
}

export class TextInput extends React.Component <TextInputProps, {}> {
  private inputState = ['valid'];

  constructor(props) {
    super(props);
  }

   public render(): JSX.Element {
     this.inputState = ['valid'];
     if (this.props.error)
      this.inputState = ['has-error', 'invalid'];
     return (
       <div className={'form-group ' + this.inputState.join(' ')}>
         <label htmlFor={this.props.name}>{this.props.label}</label>
         <input type="text"
           className="form-control"
           name={this.props.name}
           placeholder={this.props.placeholder}
           onChange={(e)=>this.props.onChange(e)}
           value={this.props.value} />
        { this.props.error && <small className="text-danger">{this.props.error}</small> }
       </div>
     )
   }
}
