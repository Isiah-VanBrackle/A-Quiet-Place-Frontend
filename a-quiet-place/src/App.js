import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import MainPageContainer from './containers/MainPageContainer.js'
import LoginForm from './components/LoginForm.js'
import SignUpForm from './components/SignUpForm.js'
import UserAdapter from './adapters/UserAdapter.js'

import HomeContainer from './containers/HomeContainer.js'
import BooksContainer from './containers/BooksContainer.js'

import results from './yelp_data.js'
import './App.css'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: {},
      books: []
    }
  }

  componentDidMount() {
    if(localStorage.getItem("token")){
      UserAdapter.persist(localStorage.getItem("token"))
      .then(resp => {
        if(!resp.error){
          this.setUser(resp)
        }else{
          this.logout()
        }
      })
    }
  }

  logout = () => {
    localStorage.clear()
    this.setState({
      currentUser: {},
      books: []
    })
  }

  setUser = (userObj) => {
    this.setState({
      currentUser: userObj.user,
      books: userObj.books
    })
  }


  render() {
    console.log(this.state);
    // lets check to see if we are logged in
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={MainPageContainer}/>
          <Route path='/login' render={(routeProps) => <LoginForm setUser={this.setUser} {...routeProps}/>}/>
          <Route path='/sign_up' component={SignUpForm}/>
          <Route path='/home' render={() => <HomeContainer currentUser={this.state.currentUser}/>} />
          <Route path='/books' render={() => <BooksContainer currentUser={this.state.currentUser}/>}/>
        </div>
      </Router>
    );
  }
}

export default App;
