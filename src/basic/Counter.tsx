import * as React from "react";

export interface ButtonProps { onClickFunction }
class Button extends React.Component <ButtonProps, {}> {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <button className="foo" onClick={this.props.onClickFunction}>Add one</button>
    );
  }
}

const Result = (props) => (
  <div>n: {props.counter}</div>
)

export class Counter extends React.Component {
  state = { counter: 0 };

  private incrementCounter() {
    this.setState(()=>({
      counter: this.state.counter+1
    }))
  }

  render() {
    return (
      <div>
        <Button onClickFunction={()=>this.incrementCounter()}/>
        <Result counter={this.state.counter} />
      </div>
    )
  }
}
