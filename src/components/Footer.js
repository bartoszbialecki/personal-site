import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const SocialLink = props => (
  <li>
    <a href={props.link.url} className={'icon alt ' + props.link.iconClassName}>
      <span className="label">{props.link.name}}</span>
    </a>
  </li>
)
const Footer = () => (
  <StaticQuery
    query={graphql`
      query SocialDataQuery {
        allSocialJson {
          edges {
            node {
              id
              name
              url
              iconClassName
            }
          }
        }
      }
    `}
    render={data => (
      <footer id="footer">
        <section>
          <h2>You can find me here</h2>
          <ul className="icons">
            {data.allSocialJson.edges.map(({ node }, index) => (
              <SocialLink key={node.id} link={node} />
            ))}
          </ul>
        </section>
        <p className="copyright">
          &copy; Bartosz Białecki. Design based on the Stellar template from:{' '}
          <a href="https://html5up.net">HTML5 UP</a>.
        </p>
      </footer>
    )}
  />
)

export default Footer
