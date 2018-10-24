import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

class MainPageContainer extends Component {

  render() {
    return (
      <div className="MainPage">
        <div className="row">
          <div className="right">
            <NavLink to="/sign_up">
              <button id="button2" className="btn-large blue-grey darken-1">Create an Account</button>
            </NavLink>
          </div>
          <div className="right">
            <NavLink to="/login">
              <button id="button1" className="btn-large blue-grey darken-1">Sign In</button>
            </NavLink>
          </div>
        </div>
        <div className="row">
          <div className="vertical-align">
            <div className="large-6 columns align-middle">
              <div className="logo"></div>
              <div className="short-rule"></div>
              <h2></h2>
            </div>
          </div>
        </div>

      </div>
    );
  }

}

export default MainPageContainer;
