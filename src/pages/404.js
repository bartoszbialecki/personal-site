import React from "react"
import { Link } from "gatsby"
import { FormattedMessage } from "react-intl"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/Header"

const NotFoundPage = props => (
  <Layout lang={props.data.site.siteMetadata.lang}>
    <Header />
    <h1>
      <FormattedMessage id="HTTP-404-ERROR-PAGE-HEADER" />
    </h1>
    <p>
      <FormattedMessage
        id="HTTP-404-ERROR-PAGE-MESSAGE"
        values={{
          link: (
            <Link to="/">
              <FormattedMessage id="HTTP-404-ERROR-PAGE-MESSAGE-LINK-TEXT" />
            </Link>
          ),
        }}
      />
    </p>
  </Layout>
)

export default NotFoundPage

export const query = graphql`
  {
    site {
      siteMetadata {
        lang
      }
    }
  }
`
