import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { FormattedMessage } from "react-intl"

const SocialLink = props => (
  <li>
    <a
      href={props.link.url}
      className={"icon alt " + props.link.iconClassName}
      title={props.link.name}
      target="_blank"
      rel="noreferrer"
    >
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
          <h2>
            <FormattedMessage id="FOOTER-SOCIAL-TITLE" />
          </h2>
          <ul className="icons">
            {data.allSocialJson.edges.map(({ node }, index) => (
              <SocialLink key={node.id} link={node} />
            ))}
          </ul>
        </section>
        <section className="lang">
          <a href="https://www.bartoszbialecki.com">EN</a> |{" "}
          <a href="https://www.bartoszbialecki.pl">PL</a>
        </section>
        <p className="copyright">
          &copy; Bartosz Białecki.{" "}
          <FormattedMessage
            id="FOOTER-COPYRIGHT-INFO"
            values={{
              link: (
                <a href="https://html5up.net" target="_blank" rel="noreferrer">
                  HTML5 UP
                </a>
              ),
            }}
          />
        </p>
      </footer>
    )}
  />
)

export default Footer
