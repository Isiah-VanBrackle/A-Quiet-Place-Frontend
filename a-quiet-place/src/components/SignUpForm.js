import React, { Component } from 'react'
import {Input, Row, Button} from 'react-materialize'
import UserAdapter from '../adapters/UserAdapter'

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = (event) => {
    //setState in here
  }

  handleSumbit = (event) => {
    //login logic here
  }

  render() {
    const {username, password} = this.state
    return(
      <div>
        <form>
          <Row>
            <Input placeholder="Placeholder" s={6} label="First Name" />
            <Input s={6} label="Last Name" />
            <Input s={12} label="username" />
            <Input type="password" label="password" s={12} />
            <Button floating medium className='blue-grey' waves='light' type="sumbit" icon='send' />
          </Row>
        </form>
      </div>

    )

  } // this closes render
} // this closes class LoginForm

export default SignUpForm;
