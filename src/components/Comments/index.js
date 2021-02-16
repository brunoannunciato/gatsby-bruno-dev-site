import React from 'react'
import PropTypes from 'prop-types'
import ReactDisqusComments from 'react-disqus-comments'

import './style.scss'

const Comments = ({ url, title }) => {
  const completeUrl = `https://bruno.dev${url}`

  return (
    <div className="comments">
      <ReactDisqusComments
        shortname="bruno-dev-1"
        identifier={ completeUrl }
        title={ title }
        url={ completeUrl }
      />
    </div>
  )
}

Comments.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Comments