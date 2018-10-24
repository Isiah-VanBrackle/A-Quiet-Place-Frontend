import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Input, Row, Button, Icon } from 'react-materialize'
import UserAdapter from '../adapters/UserAdapter'

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: ""
    };
  }

  handleChange = (event) => {
    //setState in here
    this.setState({
      [event.target.name] : event.target.value
    })

  }

  handleSumbit = (event) => {
    //login logic here
    event.preventDefault()
    UserAdapter.login(this.state)
    .then(data => {
      if(!data.error){
        this.props.setUser(data)
        this.props.history.push("/home")
        localStorage.setItem("token", data.user.user_id)
      }else{
        this.setState({error: data.error})
      }
    })
  }

  render() {
    const {username, password} = this.state
    return(
      <div className="LoginForm">
        <form onSubmit={this.handleSumbit}>
          <Row>
            <Input s={12} name="username" label="username" autoComplete="off" onChange={this.handleChange} validate><Icon>assignment_ind</Icon></Input>
            <Input type="password" name="password" label="password" s={12} autoComplete="off" onChange={this.handleChange} validate><Icon>lock</Icon></Input>
            <Button className='blue-grey' type="sumbit" waves='light'>submit<Icon right>send</Icon></Button>
            <p>New here?<NavLink to="/sign_up"> Sign up!</NavLink></p>
          </Row>
        </form>
      </div>

    )

  } // this closes render
} // this closes class LoginForm

export default LoginForm;
