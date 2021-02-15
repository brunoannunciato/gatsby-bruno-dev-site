import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Layout from "../components/Layout"
import SEO from "../components/seo"
import './styles/portifolio.scss'

import JobItem from '../components/JobItem'

const PortifolioPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {section: {eq: "portifolio"}}}) {
      edges {
        node {
          frontmatter {
            category
            description
            title
            technologies
          }
          html
        }
      }
    }
  }
  `)

  const jobs = allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Portifólio" />
      <section className="portifolio">
        {
          jobs.map((job, index) => {
            const { title, description, category, technologies } = job.node.frontmatter

            return (
              <JobItem
                key={ index }
                title={ title }
                description={ description }
                category={ category }
                technologies={ technologies }
                thumbnail={ job.node.html }
              />
            )
          })
        }
      </section>
    </Layout>
  )
}

export default PortifolioPage