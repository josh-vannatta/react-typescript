import * as React from 'react';

export interface TextInputProps {
  onChange,
  name,
  label,
  wrapperClass?,
  placeholder?,
  value?,
  error?
}
export class TextInput extends React.Component <TextInputProps, {}> {
  private inputState = ['valid'];

  constructor(props) {
    super(props);
  }

   public render(): JSX.Element {
     if (this.props.error)
      this.inputState = ['has-error', 'invalid'];
     return (
       <div className={'form-group ' + this.inputState.join(' ')}>
         <label htmlFor={this.props.name}>{this.props.label}</label>
         <input type="text"
           className="form-control"
           name={this.props.name}
           ref={this.props.name}
           placeholder={this.props.placeholder}
           onChange={this.props.onChange}
           value={this.props.value}/>
         <small className="text-danger">{this.props.error}</small>
       </div>
     )
   }
}
