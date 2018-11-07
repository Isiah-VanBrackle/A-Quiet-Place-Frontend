import React, { Fragment } from 'react'

import HomeNavBar from '../components/HomeNavBar.js'
import HomeResultsContainer from './HomeResultsContainer.js'

import results from '../yelp_data.js'

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      homeQuery: '',
      places: []
    };
  }

  componentDidMount() {

  }

  homeHandleSubmit = (event) => {
    event.preventDefault()
    this.setState({places: results})
    event.target.reset();
  }

  homeHandleClick = (event) => {
    
  }


  render () {
    console.log("user", this.props.currentUser);
    return (
      <Fragment>
        <div className="Home">
          <HomeNavBar
            currentUser={this.props.currentUser}
            homeHandleSubmit={this.homeHandleSubmit}
          />
          <h1>Hello! {`${this.props.currentUser.first_name}`} use the search bar above to find cafe's near you.</h1>
          <HomeResultsContainer places={this.state.places}/>
        </div>
      </Fragment>
    )
  }
}

export default Home;
