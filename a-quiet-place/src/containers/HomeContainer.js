import React from 'react'

import HomeNavBar from '../components/HomeNavBar.js'

class Home extends React.Component {
  render () {
    return (
        <div className="Home">
          <HomeNavBar />
          <h1>Home! - This is what should display under my main home page's nav bar when the app first loads</h1>
        </div>
    )
  }
}

export default Home;
