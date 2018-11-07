import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import { Icon } from 'react-materialize'

class MainPageContainer extends Component {
//https://image.ibb.co/dwWKaq/coffee-or-tea.jpg
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
            <div className="logoContainer">
              <div className="logo"><Icon large className="coffee">local_cafe</Icon></div>
              <h1>A Quiet Place</h1>
              <div className="short-rule"></div>
              <h3>Discover new cafe's, and keep track of your favorite books!</h3>
            </div>
          </div>
        </div>

      </div>
    );
  }

}

export default MainPageContainer;
