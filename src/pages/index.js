import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import SocialShelf from '../components/SocialShelf'

import './styles/index.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <section className="presentation">
      <span className="presentation__greeting" title="Pergunta retórica">
        Olá, tudo bem?
      </span>

      <span className="presentation__site-title">
        Eu sou <h1 className="presentation__name">Bruno Annunciato</h1>
      </span>

      <span className="presentation__occupation">
        um <h2>DESENVOLVEDOR WEB</h2> de SÃO PAULO
      </span>

      <SocialShelf/>
    </section>
  </Layout>
)

export default IndexPage
