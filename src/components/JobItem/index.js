import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

const JobItem = ({ title, description, thumbnail, category, technologies }) => {
  return (
    <section className="job-item">
      <div className="job-item__thumbnail" dangerouslySetInnerHTML={{ __html: thumbnail }}></div>

      <div className="job-item__info">
        <span className="job-item__header">
          <h1 className="job-item__title">
            { title }
          </h1>
          
          <p className="job-item__technologies">
            { technologies }
          </p>
        </span>

        <p className="job-item__description">
          { description }
        </p>

        <p className="job-item__category">
          { category }
        </p>
      </div>
    </section>
  )
}

JobItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  technologies: PropTypes.string.isRequired
}

export default JobItem