import React from "react"
import { FormattedMessage } from "react-intl"
import logo from "../assets/images/logo.svg"

const Header = props => (
  <header id="header" className="alt">
    <span className="logo">
      <img src={logo} alt="Logo" />
    </span>
    <h1>Bartosz Białecki</h1>
    <p>
      <FormattedMessage id="HEADER-SUBTITLE" />
    </p>
  </header>
)

export default Header
