import React, { useState } from "react"
import PropTypes from "prop-types"

import "./style.scss"
import Menu from "../Menu"

const Layout = ({ children }) => {
  const [isMenuOpened, setMenuOpned] = useState(true) 
  return (
    <main className="layout">
      < Menu
        isMenuOpened={ isMenuOpened }
        onCloseClick={ () => setMenuOpned(!isMenuOpened) }
      />

      { children }
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
