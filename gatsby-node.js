const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({
      node,
      getNode,
      basePath: "pages",
    })

    createNodeField({
      node,
      name: "slug",
      value: `/${slug.slice(12)}`,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
  {
    blogs: allMarkdownRemark(filter: {frontmatter: {section: {eq: "blog"}}}, sort: {fields: frontmatter___date, order: DESC}) {
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
  `).then( result => {
    const posts = result.data.blogs.edges

    posts.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve('./src/templates/blog-post.js'),
        context: {
          slug: node.fields.slug
        }
      })
    })

    const postsPerPage = 6
    const numPages = Math.ceil(posts.length / postsPerPage)

    Array.from({length: postsPerPage}).forEach((_, index) => {
      createPage({
        path: index === 0 ? '/blog' : `/blog/${ index + 1 }`,
        component: path.resolve('./src/templates/blog-list.js'),
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          numPages,
          currentPage: index + 1
        }
      })
    })
  })
}