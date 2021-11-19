import { Component } from "react";

class BigForm extends Component {

  constructor() {
    super();
    this.state = {
      values: {
        firstName: '',
        lastName: '',
        middleName: '',
        address: '',
      }
    }
  }

  handleSubmit = () => {
    alert(JSON.stringify(this.state.values))
  }

  handleOnChange = (e) => {
    this.setState((state) => ({
      values: {
        ...state.values,
        [e.target.name]: e.target.value
      }
    }))
  }

  render () {
    const { values } = this.state
    return <form onSubmit={this.handleSubmit}>
      <div>
        <div>
          <input type="text" name="firstName" value={values.firstName} onChange={this.handleOnChange} placeholder="First name" />
        </div>
        <div>
          <input type="text" name="lastName" value={values.lastName} onChange={this.handleOnChange} placeholder="Last name" />
        </div>
        <div>
          <input type="text" name="middleName" value={values.middleName} onChange={this.handleOnChange} placeholder="Middle name" />
        </div>
        <div>
          <input type="text" name="address" value={values.address} onChange={this.handleOnChange} placeholder="Address" />
        </div>
        <button type="submit">Submit</button>
      </div>
    </form>
  }
}

export { BigForm }