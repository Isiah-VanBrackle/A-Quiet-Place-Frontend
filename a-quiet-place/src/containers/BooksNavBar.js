import React from 'react'
import {NavLink} from 'react-router-dom'

const BooksNavbar = () => {
  return(
    <div className="navbar-fixed">
      <nav className="blue-grey">
        <div className="nav-wrapper row">
          <ul id='nav-mobile' className="left">
            <li className="active"><NavLink to= "/">Home</NavLink></li>
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

export default BooksNavbar
