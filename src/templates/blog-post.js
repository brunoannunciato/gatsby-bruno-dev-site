import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'

import './styles/blog-post.scss'

const BlogPost = () => {
  const { markdownRemark: { frontmatter, html, timeToRead } } = useStaticQuery(
    graphql`
    query filter($slug: String) {
      markdownRemark(fields: {slug: {eq: $slug}}) {
        html,
        timeToRead
        frontmatter {
          title,
          description,
          category,
          date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        }
      }
    }
    
    `
  )

  const { title, description, date, category } = frontmatter
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

export default BlogPost