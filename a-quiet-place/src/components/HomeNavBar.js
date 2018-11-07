import React from 'react'
import {NavLink} from 'react-router-dom'
import { Modal, Button } from 'react-materialize'

const HomeNavbar = (props) => {

  return(
    <div className="navbar-fixed">
      <nav className="blue-grey darken-1">
        <div className="nav-wrapper row">
          <ul id='nav-mobile' className="left">
            <li className="active"><NavLink to= "/books"><i class="material-icons left">local_library</i>library</NavLink></li>
            <Modal
              header={`Sorry ${props.currentUser.first_name}`}
              trigger={<Button className="blue-grey darken-1">Info</Button>}>
              <p>My developer didn't quite manage to finish the search functionality of this page (that's a mod 6 goal) but you can head on over to your library to see a real search bar at work.</p>
            </Modal>
          </ul>
          <ul id='nav-mobile' className="right">
            <li className="active"><NavLink to= "/books"><i class="material-icons left">assignment_ind</i>Welcome {`${props.currentUser.first_name} ${props.currentUser.last_name}`}</NavLink></li>
          </ul>
          <form onSubmit={props.homeHandleSubmit}>
            <div className="input-field col s6">
              <input id="search" type="search" autoComplete="off" required/>
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

export default HomeNavbar
