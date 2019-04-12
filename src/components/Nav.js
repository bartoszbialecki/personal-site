import React from "react"
import Scrollspy from "react-scrollspy"
import Scroll from "./Scroll"
import { FormattedMessage } from "react-intl"

const Nav = props => (
  <nav id="nav" className={props.sticky ? "alt" : ""}>
    <Scrollspy
      items={[
        "about-me",
        "experience",
        "education",
        "certifications",
        "contact",
      ]}
      currentClassName="is-active"
      offset={-300}
    >
      <li>
        <Scroll type="id" element="about-me">
          <a href="#">
            <FormattedMessage id="NAV-ABOUT" />
          </a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="experience">
          <a href="#">
            <FormattedMessage id="NAV-EXPERIENCE" />
          </a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="education">
          <a href="#">
            <FormattedMessage id="NAV-EDUCATION" />
          </a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="certifications">
          <a href="#">
            <FormattedMessage id="NAV-CERTIFICATIONS" />
          </a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="contact">
          <a href="#">
            <FormattedMessage id="NAV-CONTACT" />
          </a>
        </Scroll>
      </li>
    </Scrollspy>
  </nav>
)

export default Nav
