import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const BlogPost = () => {
  const { markdownRemark } = useStaticQuery(
    graphql`
    query filter($slug: String) {
      markdownRemark(fields: {slug: {eq: $slug}}) {
        html
        frontmatter {
          title
        }
      }
    }
    
    `
  )

  const title = markdownRemark.frontmatter.title
  const content = markdownRemark.html
  return (
    <>
      <h1> { title } </h1>
      <div dangerouslySetInnerHTML={{__html: content}}></div>
    </>
  )
}

export default BlogPost