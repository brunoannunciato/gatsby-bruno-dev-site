import React from 'react'
import Link from '../Link'
import './style.scss'

import { Close as CloseIcon } from '@styled-icons/evaicons-solid/Close'

const Menu = () => {
  return (
    <aside className="menu">
      <ul className="menu__list">
        <li className="menu__item">
          <Link className="menu__link" to="/">
            Início
          </Link>
        </li>

        <li className="menu__item">
          <Link className="menu__link" to="/sobre">
            Sobre
          </Link>
        </li>

        <li className="menu__item">
          <Link className="menu__link" to="/portifolio">
            Portifólio
          </Link>
        </li>

        <li className="menu__item">
          <Link className="menu__link" to="/blog">
            Blog
          </Link>
        </li>
      </ul>

      <button className="close-button">
        <CloseIcon size="28"/>
      </button>
    </aside>
  )
}

export default Menu