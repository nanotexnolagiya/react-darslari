import { Component } from "react";

class List extends Component {
  constructor() {
    super();
    this.state = {
      list: [1, 2, 3, 4, 5]
    }
  }
  render () {
    return (
      <ul>
        {
          this.state.list.map(number => <li key={number}>List {number}</li>)
        }
      </ul>
    )
  }
}

export { List }