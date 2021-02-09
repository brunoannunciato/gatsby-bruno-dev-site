import React from 'react'
import Link from '../Link'
import './style.scss'

import { Close as CloseIcon } from '@styled-icons/evaicons-solid/Close'

const Menu = props => {
  const { isMenuOpened, onCloseClick } = props

  return (
    <aside className={`menu ${isMenuOpened ? 'is-actived' : ''}`}>
      <nav>
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
      </nav>

      <button
        className="close-button"
        onClick={ onCloseClick }
      >
        <CloseIcon size="28"/>
      </button>
    </aside>
  )
}

export default Menu