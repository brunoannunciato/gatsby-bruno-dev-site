import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'

import './styles/blog-post.scss'

const BlogPost = (props) => {
  const content = props.data.markdownRemark
  const { frontmatter: { title, date, description, category }, timeToRead, html } = content

  return (
    <Layout className="blog-post">
      <SEO title={ title } />
      <div className="blog-post__header">
        <p className="blog-post__info"> { `${ date } • ${ timeToRead } minutos de leitura • ${ category }`} </p>
        <h1 className="blog-post__title"> { title } </h1>
        <h2 className="blog-post__description"> { description } </h2>
      </div>
      <div className="blog-post__main-content" dangerouslySetInnerHTML={{__html: html}}></div>
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        category
      }
      html
      timeToRead
    }
  }
`

export default BlogPost