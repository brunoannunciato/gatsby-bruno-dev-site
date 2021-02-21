import React from 'react'
import PostItem from '../components/PostItem'

const BlogPosts = ({ postList }) => (
    <> {
    postList.map(({node: {
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
    } </>
)

export default BlogPosts