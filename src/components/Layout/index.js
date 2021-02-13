import React, { useState } from "react"
import PropTypes from "prop-types"

import "./style.scss"
import Menu from "../Menu"

import { MenuAltLeft as MenuIcon } from '@styled-icons/boxicons-regular/MenuAltLeft'

const Layout = ({ children, className }) => {
  const [isMenuOpened, setMenuOpned] = useState(true) 
  return (
    <main className={`layout ${className ? className : ''}`}>
      < Menu
        isMenuOpened={ isMenuOpened }
        onCloseClick={ () => setMenuOpned(!isMenuOpened) }
      />

      <section className={`content ${!isMenuOpened ? 'is-expanded' : ''}`}>
        { children }
      </section>

      <button
        className="menu-icon"
        onClick={ () => setMenuOpned(!isMenuOpened) }
      >
        <MenuIcon size="28"/>
      </button>
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
