import React from 'react'
import Link from '../Link'
import './style.scss'

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
    </aside>
  )
}

export default Menu