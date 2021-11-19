import React, { Component } from 'react'
import { Demo } from './components/Demo';
import './App.scss'
import { ToDo } from './components/ToDo/ToDo';
import { BigForm } from './components/BigForm';

class App extends Component {

  constructor() {
    super();
    this.state = {
      showDemo: true
    }
  }

  handleClick = () => {
    this.setState({
      showDemo: !this.state.showDemo
    })
  }

  render() {
    return <div>
      {this.state.showDemo && <Demo name="Islom" />}
      <div>
        <button className="btn" onClick={this.handleClick}>Toggle Demo component</button>
      </div>
      <h1>App component</h1>
      <div>
        <ToDo />
      </div>
      <div>
        <BigForm />
      </div>
    </div>
  }
}

export default App;
