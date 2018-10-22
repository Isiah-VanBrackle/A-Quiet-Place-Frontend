import React, { Fragment } from 'react'

import HomeNavBar from '../components/HomeNavBar.js'
import HomeResultsContainer from './HomeResultsContainer.js'

import results from '../yelp_data.js'

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      homeQuery: '',
      places: results
    };
  }

  componentDidMount() {

  }



  render () {
    return (
      <Fragment>
        <div className="Home">
          <HomeNavBar


          />
          <h1>Home! - This is what should display under my main home page's nav bar when the app first loads</h1>
          <HomeResultsContainer places={this.state.places}/>
        </div>
      </Fragment>
    )
  }
}

export default Home;
