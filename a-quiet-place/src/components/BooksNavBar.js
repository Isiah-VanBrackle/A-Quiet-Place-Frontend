import React from 'react'
import {NavLink} from 'react-router-dom'

import { Button, Modal} from 'react-materialize'

const BooksNavbar = (props) => {
  return(
    <div className="navbar-fixed">
      <nav className="blue-grey">
        <div className="nav-wrapper row">
          <ul id='nav-mobile' className="left">
            <li className="active"><NavLink to= "/home"><i class="material-icons left">store</i>Home Page</NavLink></li>
            <Modal
              header={`Hello again ${props.currentUser.first_name}`}
              trigger={<Button className="blue-grey darken-1">Info</Button>}>
              <p>Here when you enter a query in the search bar i'm interpolating it and sending it off to the google books api. Once the results appear on the page feel free to interact with them and add any books you like to your personal library.</p>
            </Modal>
          </ul>
          <ul id='nav-mobile' className="right">
            <li className="active"><NavLink to= "/books"><i class="material-icons left">assignment_ind</i>Welcome {`${props.currentUser.first_name} ${props.currentUser.last_name}`}</NavLink></li>
          </ul>
          <form onSubmit={props.booksHandleSubmit}>
            <div className="input-field col s6">
              <input id="search" type="search" onChange={props.booksSearchInput} autoComplete="off" required/>
              <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
              <i className="material-icons">close</i>
              <button className="btn-floating btn-large halfway-fab waves-effect waves-light blue-grey darken-1 right" type="submit" name="action">
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
