import React, { useState } from 'react'
import { graphql } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Pagination from '../components/Pagination'
import Search from '../components/Search'
import BlogPosts from './blog-posts'
import './styles/blog-list.scss'

const BlogList = (props) => {
  const postList = props.data.allMarkdownRemark.edges
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage === 2 ? '/blog' : `/blog/${currentPage - 1}`
  const nextPage = `/blog/${currentPage + 1 }`
  const [ isSearching, setIsSearching ] = useState(false)

  const handleIsSearching = inputValue => {
    if (inputValue.length === 0) {
      setIsSearching(false)
      return
    }

    setIsSearching(true)
  }

  return (
    <Layout>
      <SEO title="Blog" />
        <div className="search-box">
          <Search handleIsSearching={ handleIsSearching } isSearching={ isSearching }/>
        </div>

        {
          !isSearching &&
          <>
            <BlogPosts postList={ postList } />
            <Pagination
              isFirst = { isFirst }
              isLast = { isLast } 
              prevPage = { prevPage }
              nextPage = { nextPage }
              currentPage = { currentPage }
              numPages = { numPages }
            />
          </>
        }

    </Layout>
  )
}

export const query = graphql`
query PostList($skip: Int!, $limit: Int!) {
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, limit: $limit, skip: $skip, filter: {frontmatter: {section: {eq: "blog"}}}) {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          category
          date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
          description
          title
        }
        timeToRead
      }
    }
  }
}
`

export default BlogList