import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Input, Row, Button, Icon} from 'react-materialize'
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
      <div className="SignUpForm">
        <form>
          <Row>
            <Input s={6} label="First Name" autoComplete="off"/>
            <Input s={6} label="Last Name" autoComplete="off"/>
            <Input s={12} label="username" autoComplete="off"/>
            <Input type="password" label="password" s={12} autoComplete="off"/>
            <Button className='blue-grey' type="sumbit" waves='light'>submit<Icon right>send</Icon></Button>
            <p>Old Friend?<NavLink to="/login"> Welcome Back</NavLink></p>
          </Row>
        </form>
      </div>

    )

  } // this closes render
} // this closes class LoginForm

export default SignUpForm;
