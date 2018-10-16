import React from 'react'
import {NavLink} from 'react-router-dom'

const BooksNavbar = (props) => {
  return(
    <div className="navbar-fixed">
      <nav className="blue-grey">
        <div className="nav-wrapper row">
          <ul id='nav-mobile' className="left">
            <li className="active"><NavLink to= "/">Home</NavLink></li>
          </ul>
          <form>
            <div className="input-field col s6">
              <input id="search" type="search" onChange={props.booksSearchInput} autoComplete="off" required/>
              <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
              <i className="material-icons">close</i>
              <button className="btn-floating btn-large halfway-fab waves-effect waves-light blue-grey darken-1 right" type="submit" name="action" onClick={props.booksHandleSubmit}>
                <i className="material-icons right">send</i>
              </button>
            </div>
          </form>
        </div>
      </nav>
    </div>
  )
}

export default BooksNavbar
