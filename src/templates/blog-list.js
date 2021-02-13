import React from 'react'
import { graphql } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from '../components/PostItem'

const BlogList = (props) => {
  const postList = props.data.allMarkdownRemark.edges
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