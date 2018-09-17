import * as React from 'react';

export interface SelectInputProps {
  name: string,
  label: string,
  onChange: Function,
  defaultOption: string,
  value?: string,
  error?: Array<string>
  options: Array<Object>
}

export class SelectInput extends React.Component <SelectInputProps, {}> {
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
         <select
           className="form-control"
           name={this.props.name}
           onChange={(e)=>this.props.onChange(e)}
           value={this.props.value} >
          <option > { this.props.defaultOption } </option>
           { this.props.options.map(
             (option: {value, text}) => <option
                 key={option.value}
                 value={option.value}>
                 {option.text}
               </option>
             ) }
         </select>
        { this.props.error && <small className="text-danger">{this.props.error}</small> }
       </div>
     )
   }
}
