import { Component } from "react";
import './Tasks.scss'

class TaskItem extends Component {
  render() {
    const { children, onDelete } = this.props
    return <div className="task-item">
      <span>{children}</span>
      <button onClick={onDelete}>X</button>
    </div>
  }
}

class Tasks extends Component {
  handleOnDelete = (index, e) => {
    this.props.onDeleteTask(index)
  }
  render() {
    const { options, children } = this.props
    return  options ? options.map((option, i) => <TaskItem key={i} onDelete={this.handleOnDelete.bind(null, i)}>{option}</TaskItem>) : <div>
      { children }
    </div>
  }
}

// eslint-disable-next-line no-lone-blocks
{/* 
  <Tasks options={[]}></Tasks>
  <Tasks>
    <TaskItem></TaskItem>
  </Tasks>
*/}

export { Tasks, TaskItem }