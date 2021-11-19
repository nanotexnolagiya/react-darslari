import { Component } from "react";
import './AddTask.scss'

class AddTask extends Component {

  constructor() {
    super()
    this.state = {
      taskValue: ''
    }
  }

  handleOnChange = (e) => {
    const value = e.target.value
    this.setState({
      taskValue: value
    })
  }

  handleOnAdd = () => {
    this.props.onChange(this.state.taskValue)
    this.setState({
      taskValue: ''
    })
  }

  render() {
    const { taskValue } = this.state
    return <div className="add-task">
      <input type="text" value={taskValue} onChange={this.handleOnChange} placeholder="Describe task" />
      <button onClick={this.handleOnAdd}>Add</button>
    </div>
  }
}

export { AddTask }