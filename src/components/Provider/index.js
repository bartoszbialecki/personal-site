import React from "react"
import { Context } from "../Context"

const Provider = ({ children, lang }) => (
  <Context.Provider
    value={{
      lang,
    }}
  >
    {children}
  </Context.Provider>
)

export default Provider
