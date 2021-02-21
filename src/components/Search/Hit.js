import React from 'react'
import PostItem from '../PostItem'

const Hit = ({ hit }) => (
    <PostItem
        title={ hit.title }
        description={ hit.description }
        category={ hit.category }
        timeToRead={ hit.timeToRead }
        date={ hit.date }
        slug={ hit.fields.slug }
    />
)

export default Hit