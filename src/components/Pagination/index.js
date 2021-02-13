import React from 'react'
import { Link } from 'gatsby'

import propsType from 'prop-types'
import './style.scss'

const Pagination = ({ isFirst, isLast, currentPage, numPages, nextPage, prevPage }) => {
  return (
    <nav className="pagination">
      {
        !isFirst &&
        <Link to ={ prevPage }>← Página anterior</Link>
      }
      

      <p className="pagination__index">{ currentPage } de { numPages }</p>

      {
        !isLast &&
        <Link to ={ nextPage }>Próxima página →</Link>
      }
    </nav>
  )
}

Pagination.propsType = {
  isFirst: propsType.bool.isRequired,
  isLast: propsType.bool.isRequired,
  currentPage: propsType.number.isRequired,
  numPages:propsType.number.isRequired,
  nextPage: propsType.string,
  prevPage:propsType.string
}

export default Pagination

