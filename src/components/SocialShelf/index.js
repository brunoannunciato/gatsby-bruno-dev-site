import React from 'react'
import './style.scss'

import social from './social'
import icons from './icons'

const SocialShelf = () => {
  return (
    <div className="social-shelf">
      <ul className="social-shelf__list">
        {
          social.map((item,  index) => {
            const Icon = icons[item.name]

            return (
              <li
                key={`social-${index}`}
                className="social-shelf__item"
              >
                <a
                  href={ item.url }
                  target="Black"
                  title={ item.name }
                  className="social-shelf__link"
                >
                  <Icon
                    size="24"
                    className="social-shelf__icon"
                    />
                </a>
              </li>
            )
          })
        }
      </ul>
    </div>

  )
}

export default SocialShelf