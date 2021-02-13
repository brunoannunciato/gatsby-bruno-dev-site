import React from 'react'
import { graphql } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from '../components/PostItem'
import Pagination from '../components/Pagination'

const BlogList = (props) => {
  const postList = props.data.allMarkdownRemark.edges
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage === 2 ? '/blog' : `/blog/${currentPage - 1}`
  const nextPage = `/blog/${currentPage + 1 }`

  return (
    <Layout>
      <SEO title="Blog" />
        {
          postList.map(({node: {
            frontmatter: {
              category,
              date,
              description,
              title
            },
            fields: { slug },
            timeToRead
          }}) => {
            return (
              <PostItem
                key={ slug }
                slug={ slug }
                title={ title }
                category={ category }
                description={ description }
                date={ date }
                timeToRead={ timeToRead }
              />
            )
          })
        }

        <Pagination
          isFirst = { isFirst }
          isLast = { isLast } 
          prevPage = { prevPage }
          nextPage = { nextPage }
          currentPage = { currentPage }
          numPages = { numPages }
        />
    </Layout>
  )
}

export const query = graphql`
query PostList($skip: Int!, $limit: Int!) {
  allMarkdownRemark(
    sort: { fields: frontmatter___date, order: DESC }
    limit: $limit
    skip: $skip
  ) {
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