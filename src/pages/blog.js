import React from "react"
import './styles/blog.scss'

import Layout from "../components/Layout"
import SEO from "../components/seo"

import PostItem from '../components/PostItem'


const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
      <PostItem />
  </Layout>
)

export default BlogPage