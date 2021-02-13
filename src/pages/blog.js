import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import './styles/blog.scss'

import Layout from "../components/Layout"
import SEO from "../components/seo"

import PostItem from '../components/PostItem'


const BlogPage = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            timeToRead
            frontmatter {
              title
              description
              category
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            }
            fields {
              slug
            }
          }
        }
      }
    }
    `
  )

  const posts = allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Blog" />
        {
          posts.map(({node: {
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

export default BlogPage