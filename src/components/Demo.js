import { Component } from "react";
import { List } from "./List";

class Demo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Hello World!',
      count: 5
    }

  }

  componentDidMount() {
    console.log(this.props.name)
  }

  componentWillUnmount() {
    console.log('Demo komponenti ochirildi.');
  }

  handleClick = () => {
    this.setState((state, props) => {
      return ({
        ...state,
        message: `Hello ${props.name}`
      })
    })
  }

  render() {
    return <div>
      {this.props.name}
      <br />
      {this.state.message}
      <br />
      <button onClick={() => this.handleClick()}>Alert {this.state.count}</button>
      <List />
    </div>
  }
}

export { Demo }