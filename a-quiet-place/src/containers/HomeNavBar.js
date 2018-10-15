import React from 'react'
import {NavLink} from 'react-router-dom'

const HomeNavbar = () => {
  return(
    <div className="navbar-fixed">
      <nav className="blue-grey darken-1">
        <div className="nav-wrapper row">
          <ul id='nav-mobile' className="left">
            <li className="active"><NavLink to= "/books">Books</NavLink></li>
          </ul>
          <form>
            <div className="input-field col s6">
              <input id="search" type="search" required/>
              <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
    </div>
  )
}

export default HomeNavbar
