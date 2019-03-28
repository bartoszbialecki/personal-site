import React from "react"

import logo from "../assets/images/logo.svg"

const Header = props => (
  <header id="header" className="alt">
    <span className="logo">
      <img src={logo} alt="Logo" />
    </span>
    <h1>Bartosz Białecki</h1>
    <p>Software Developer</p>
  </header>
)

export default Header
