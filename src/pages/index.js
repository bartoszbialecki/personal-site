import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'
import Image from 'gatsby-image';
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import face from '../assets/images/face.png'
import SchemaOrg from '../components/SchemaOrg'

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
    const title = this.props.data.site.siteMetadata.title;
    const siteUrl = this.props.data.site.siteMetadata.siteUrl;

    return (

      <Layout>
        <Helmet
          title={title}
          meta={[
            { name: 'description', content: this.props.data.site.siteMetadata.description },
            { name: 'keywords', content: this.props.data.site.siteMetadata.keywords }
          ]}
        >
          <html lang="en" />

          <meta name="author" content={this.props.data.site.siteMetadata.author} />
          <meta name="robots" content= "yes, all, index, follow" />

          <link rel="canonical" href={siteUrl} />

          <meta property="og:url" content={siteUrl} />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en" />
          <meta property="og:site_name" content={title} />
          <meta property="og:image" content={face} />
          <meta property="og:image:secure_url" content={face} />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="318" />
          <meta property="og:image:height" content="318" />
          <meta property="og:image:alt" content="Face of Bartosz Białecki" />
        </Helmet>

        <SchemaOrg 
            url={siteUrl}
            title={title}
            defaultTitle={title}
        />

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
              <span className="image">
                <Image fixed={this.props.data.face.childImageSharp.fixed} alt="Face of Bartosz Białecki" />
              </span>
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

export const query = graphql`
  {
    site {
      siteMetadata {
        siteUrl
        title
        author
        description
        keywords
      }
    }
 
    face: file(absolutePath: {
      regex: "/face.png/"
    }) {
      childImageSharp {
        fixed(width: 318) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`