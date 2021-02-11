import React from 'react'
import './style.scss'

import Technologies from './technologies'
import icons from './icons'

const TechnologiesShelf = () => {
  return (
    <div className="technologies-shelf">
      <ul className="technologies-shelf__list">
        {
          Technologies.map((item,  index) => {
            const Icon = icons[item.name]

            return (
              <li
                key={`social-${index}`}
                className="technologies-shelf__item"
              >
                <a
                  href={ item.url }
                  target="Black"
                  title={ item.name }
                  className="technologies-shelf__link"
                >
                  <Icon
                    size="36"
                    className="technologies-shelf__icon"
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

export default TechnologiesShelf