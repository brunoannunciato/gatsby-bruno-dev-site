import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import './style.scss'

const ProfileImage = () => {
  const { Image } = useStaticQuery(
    graphql`
    query {
      Image: file(relativePath: { eq: "profile-image.png" }) {
        childImageSharp {
          fixed(width: 250, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
    `
  )
  return (
    <figure className="profile-image">
      { console.log({ Image }) }
      <Img fixed={ Image.childImageSharp.fixed } />
    </figure>
  )
}

export default ProfileImage