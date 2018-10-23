import React, { Component } from 'react'
import {Input, Row, Button, Icon} from 'react-materialize'
import UserAdapter from '../adapters/UserAdapter'

class LoginForm extends Component {
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
            <Input s={12} label="username" validate><Icon>assignment_ind</Icon></Input>
            <Input type="password" label="password" s={12} validate><Icon>lock</Icon></Input>
            <Button floating medium className='blue-grey' waves='light' type="sumbit" icon='send' />
          </Row>
        </form>
      </div>

    )

  } // this closes render
} // this closes class LoginForm

export default LoginForm;
