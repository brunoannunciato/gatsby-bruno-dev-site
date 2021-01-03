import React from  'react'
import { Link as GatsbyLink } from 'gatsby'
import './style.scss'

const Link = ({ to, className, children }) => {
  return (
    <GatsbyLink to={ to } className={`link ${ className ? className : '' }`} activeClassName="link__actived">
      <span className="link__content">
        { children }
      </span>
    </GatsbyLink>
  )
}

export default Link