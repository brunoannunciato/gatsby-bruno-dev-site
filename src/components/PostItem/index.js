import React from 'react'
import propTypes from 'prop-types'
import { Link } from "gatsby"
import './style.scss'

const PostItem = ({ slug, date, timeToRead, title, category, description }) => {
  return (
    <section className="post-item">
      <Link  className="post-item__link" to={ slug }>
        <p className="post-item__date">
          { date } • { timeToRead } min de leitura
        </p>

        <h1 className="post-item__title">
          { title }
        </h1>

        <p className="post-item__category">
          { category }
        </p>

        <p className="post-item__description">
          { description }
        </p>
      </Link>
    </section>
  )
}

PostItem.propTypes = {
  slug: propTypes.string.isRequired,
  date:propTypes.string.isRequired,
  timeToRead: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  description: propTypes.string.isRequired
}

export default PostItem