import React from "react"
import './styles/blog.scss'

import Layout from "../components/Layout"
import SEO from "../components/seo"

import PostItem from '../components/PostItem'


const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
      <PostItem
        slug="/slug/"
        title="Título bacana para uma postagem"
        category="Front-end"
        description="Descrição gigante sobre uma postagem inexistente que jamais será lida mas foi escrita."
        date="04 de Abril de 2021"
        timeToRead="1"
      />
  </Layout>
)

export default BlogPage