import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import face from '../assets/images/face.png'

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <Layout>
        <Helmet title="Bartosz Białecki | Homepage" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="about-me" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>About me</h2>
                </header>
                <p>Hi, I am Bartosz Białecki. I am a software developer but I also like to dance or train. I love music and I am a big fun of airsoft.</p>
                <ul className="actions">
                  <li><Link to="/resume" className="button">My Resume</Link></li>
                </ul>
              </div>
              <span className="image"><img src={face} alt="My face" /></span>
            </div>
          </section>

          <section id="experience" className="main special">
            <header className="major">
              <h2>Experience</h2>
            </header>
              
            {/* <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button">Learn More</Link></li>
              </ul>
            </footer> */}
          </section>

          <section id="education" className="main special">
            <header className="major">
              <h2>Education</h2>
            </header>
            
          </section>

          <section id="contact" className="main special">
            <header className="major">
              <h2>Contact</h2>
            </header>
            {/* <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button special">Get Started</Link></li>
                <li><Link to="/generic" className="button">Learn More</Link></li>
              </ul>
            </footer> */}
          </section>

        </div>

      </Layout>
    )
  }
}

export default Index
