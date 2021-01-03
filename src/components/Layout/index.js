import React from "react"
import PropTypes from "prop-types"

import "./style.scss"
import Menu from "../Menu"

const Layout = ({ children }) => {
  return (
    <main className="layout">
      <Menu />
      { children }
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
