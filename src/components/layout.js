import React from "react"
import "../assets/scss/main.scss"
import Footer from "./Footer"
import en from "react-intl/locale-data/en"
import pl from "react-intl/locale-data/pl"
import { addLocaleData, IntlProvider } from "react-intl"
import enMessages from "../locales/en/translations.json"
import plMessages from "../locales/pl/translations.json"
import { Context } from "./Context"
import Provider from "./Provider"

addLocaleData([...en, ...pl])

class Template extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: "is-loading",
    }
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: "" })
    }, 100)
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  }

  render() {
    const { children, lang } = this.props

    return (
      <Provider lang={lang}>
        <Context.Consumer>
          {({ lang }) => (
            <IntlProvider
              locale={lang}
              defaultLocale={"en"}
              messages={lang === "en" ? enMessages : plMessages}
            >
              <div className={`body ${this.state.loading}`}>
                <div id="wrapper">
                  {children}
                  <Footer />
                </div>
              </div>
            </IntlProvider>
          )}
        </Context.Consumer>
      </Provider>
    )
  }
}

export default Template
