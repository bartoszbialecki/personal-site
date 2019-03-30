import React from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"
import { Waypoint } from "react-waypoint"
import Image from "gatsby-image"
import { graphql } from "gatsby"
import { FormattedMessage } from "react-intl"

import ReactModal from "react-modal"

import Layout from "../components/layout"
import Header from "../components/Header"
import Nav from "../components/Nav"
import face from "../assets/images/face.png"
import SchemaOrg from "../components/SchemaOrg"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#13547a",
    borderRadius: "0.25em",
  },
}

ReactModal.setAppElement("#___gatsby")

class IndexPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      stickyNav: false,
      contactName: "",
      contactEmail: "",
      contactSubject: "",
      contactMessage: "",
      showModal: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleContactSubmit = event => {
    event.preventDefault()

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(this.handleContactSuccess)
      .catch(error => alert(error))
  }

  handleContactSuccess = () => {
    this.setState({
      contactName: "",
      contactEmail: "",
      contactSubject: "",
      contactMessage: "",
      showModal: true,
    })
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  createContactEmail = () => {
    let email = "<n uers='znvygb:onegbfm.ovnyrpxv@tznvy.pbz'>onegbfm.ovnyrpxv@tznvy.pbz</n>".replace(
      /[a-zA-Z]/g,
      function(c) {
        return String.fromCharCode(
          (c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26
        )
      }
    )

    return email
  }

  render() {
    const {
      title,
      siteUrl,
      lang,
      description,
      keywords,
      author,
    } = this.props.data.site.siteMetadata
    console.log("lang", lang)
    console.log("url", siteUrl)
    return (
      <Layout lang={lang}>
        <Helmet title={title}>
          <html lang={lang} />

          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta name="author" content={author} />
          <meta name="robots" content="yes, all, index, follow" />

          <link rel="canonical" href={siteUrl} />

          <meta property="og:url" content={siteUrl} />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content={lang} />
          <meta property="og:site_name" content={title} />
          <meta property="og:image" content={face} />
          <meta property="og:image:secure_url" content={face} />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="318" />
          <meta property="og:image:height" content="318" />
          <meta property="og:image:alt" content="Face of Bartosz Białecki" />
        </Helmet>

        <SchemaOrg url={siteUrl} title={title} defaultTitle={title} />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        />
        <Nav sticky={this.state.stickyNav} />

        <ReactModal
          isOpen={this.state.showModal}
          onRequestClose={this.closeModal}
          style={modalStyles}
        >
          <p>
            <FormattedMessage id="CONTACT-FORM-SUCCESS-MESSAGE" />
          </p>
          <button onClick={this.closeModal}>Okay</button>
        </ReactModal>

        <div id="main">
          <section id="about-me" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>
                    <FormattedMessage id="ABOUT-ME-SECTION-HEADER" />
                  </h2>
                </header>
                <p>
                  <FormattedMessage id="ABOUT-ME-SECTION-INFO" />
                </p>
                <ul className="actions">
                  <li>
                    <Link to="/resume" className="button">
                      <FormattedMessage id="RESUME-BUTTON-TITLE" />
                    </Link>
                  </li>
                </ul>
              </div>
              <span className="image">
                <Image
                  fixed={this.props.data.face.childImageSharp.fixed}
                  alt="Face of Bartosz Białecki"
                />
              </span>
            </div>
          </section>

          <section id="experience" className="main special">
            <header className="major">
              <h2>
                <FormattedMessage id="EXPERIENCE-SECTION-HEADER" />
              </h2>
            </header>

            {/* <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button">Learn More</Link></li>
              </ul>
            </footer> */}
          </section>

          <section id="education" className="main special">
            <header className="major">
              <h2>
                <FormattedMessage id="EDUCATION-SECTION-HEADER" />
              </h2>
            </header>
          </section>

          <section id="contact" className="main special">
            <header className="major">
              <h2>
                <FormattedMessage id="CONTACT-SECTION-HEADER" />
              </h2>
            </header>
            <div>
              <div className="contact-form">
                <form
                  name="contact"
                  method="post"
                  onSubmit={this.handleContactSubmit}
                  onClick={this.closeModal}
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <input type="hidden" name="bot-field" />
                  <div className="field half first">
                    <label htmlFor="contactName">
                      <FormattedMessage id="CONTACT-FORM-INPUT-NAME" />
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      value={this.state.contactName}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>
                  <div className="field half">
                    <label htmlFor="contactEmail">Email</label>
                    <input
                      type="text"
                      name="contactEmail"
                      value={this.state.contactEmail}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="contactSubject">
                      <FormattedMessage id="CONTACT-FORM-INPUT-SUBJECT" />
                    </label>
                    <input
                      type="text"
                      name="contactSubject"
                      value={this.state.contactSubject}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="contactMessage">
                      <FormattedMessage id="CONTACT-FORM-INPUT-MESSAGE" />
                    </label>
                    <textarea
                      name="contactMessage"
                      rows="6"
                      value={this.state.contactMessage}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>
                  <ul className="actions">
                    <li>
                      <FormattedMessage id="CONTACT-FORM-SEND-BUTTON-TITLE">
                        {title => <input type="submit" value={title} />}
                      </FormattedMessage>
                    </li>
                  </ul>
                </form>
              </div>
              <div className="contact-details">
                <div className="contact-method">
                  <span className="icon alt fa-envelope" />
                  <h3>Email</h3>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: this.createContactEmail(),
                    }}
                  />
                </div>
              </div>
            </div>
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

export default IndexPage

export const query = graphql`
  {
    site {
      siteMetadata {
        siteUrl
        title
        author
        description
        keywords
        lang
      }
    }

    face: file(absolutePath: { regex: "/face.png/" }) {
      childImageSharp {
        fixed(width: 318) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
