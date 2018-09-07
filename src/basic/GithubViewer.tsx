import * as React from "react";
let axios = require('axios');

export interface FormProps { onCardChange }
class Form extends React.Component<FormProps, {}> {
    state = {
      userName: ''
    }

    private handleSubmit(event: React.FormEvent<HTMLFormElement>):void {
      event.preventDefault();
      axios.get(`https://api.github.com/users/${this.state.userName}`)
        .then(res => {
          this.props.onCardChange(res.data);
          this.setState({ userName: ''});
        })
    }

    public render(): JSX.Element {
      return (
        <form onSubmit={e=>this.handleSubmit(e)} className="my-4">
          <div className="row">
            <div className="form-group col-sm-9">
              <input type="text" className="form-control"
                    placeholder="Enter username"
                    value={this.state.userName}
                    onChange={(e)=>this.setState({ userName: e.target.value})}/>
            </div>
            <div className="col-sm-3 pl-0">
              <button type="submit" className="btn btn-primary w-100">Add card</button>
            </div>
          </div>
        </form>
      )
    }
}

const Card = (props) => {
    function handleClick() {
        window.open(props.html_url, '_blank');
    }
    return (
      <div className="github-card z-depth-2 z-depth-hover my-3 p-3 pointer"
        onClick={()=>handleClick()}>
        <img width="100" src={props.avatar_url} />
        <div className="card-body">
          <h2 style={{fontSize: '1.25em'}}>{props.name}</h2>
          <p style={{fontSize: '1em'}}>{props.company}</p>
        </div>
      </div>
    );
}

const CardList = (props) => {
  return (
    <div className="card-list">
      { props.cards.map(card => <Card {...card} key={card.id} />) }
    </div>
  );
}

class GithubViewer extends React.Component {
  state= {
    data: null
  }

  constructor(props) {
    super(props);
  }

  public onCardChange(data):void {
    this.setState({
      data: this.state.data.concat(data)
    });
  }

  public render(): JSX.Element {
    return (
      <div className="container">
        <Form onCardChange={d=>this.onCardChange(d)}/>
        <CardList cards={this.state.data} />
      </div>
    );
  }
}

export { GithubViewer };
