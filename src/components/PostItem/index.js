import React from 'react'
import { Link } from "gatsby"
import './style.scss'

const PostItem = () => {
  return (
    <section className="post-item">
      <Link  className="post-item__link" to="/slug/">
        <p className="post-item__date">
          28 de Dezembro de 2020 • 9 min de leitura
        </p>

        <h1 className="post-item__title">
          Um título bacana para um post nem tão bacana.
        </h1>

        <p className="post-item__category">
          Front-end
        </p>

        <p className="post-item__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum molestias mollitia tempora, temporibus soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum molestias mollitia tempora, temporibus soluta.
        </p>
      </Link>
    </section>
  )
}

export default PostItem