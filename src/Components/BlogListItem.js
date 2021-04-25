import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const BlogListItem = ({ id, title }) => {
    return (
        <ListGroup.Item className="mb-2 d-flex align-items-center justify-content-between w-25" key={id} >
            <Link to={`/blogs/${id}`}>
                {title}
            </Link>
            <Link className="btn btn-primary" to={`/edit/${id}`} >
                Edit
            </Link>
        </ListGroup.Item>
    )
}

export default BlogListItem
