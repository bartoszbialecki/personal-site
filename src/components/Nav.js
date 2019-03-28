import React from "react"
import Scrollspy from "react-scrollspy"
import Scroll from "./Scroll"

const Nav = props => (
  <nav id="nav" className={props.sticky ? "alt" : ""}>
    <Scrollspy
      items={["about-me", "experience", "education", "contact"]}
      currentClassName="is-active"
      offset={-300}
    >
      <li>
        <Scroll type="id" element="about-me">
          <a href="#">About me</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="experience">
          <a href="#">Experience</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="education">
          <a href="#">Education</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="contact">
          <a href="#">Contact</a>
        </Scroll>
      </li>
    </Scrollspy>
  </nav>
)

export default Nav
