import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { connect } from "react-redux"
import BlogListItem from './BlogListItem'

const BlogsList = (props) => {
    return (
        <ListGroup>
            {
                props.blogs.map((blog) => {
                    return(
                        <BlogListItem key={blog.id} {...blog} />
                    )
                })
            }
        </ListGroup>
    )
}

const mapStateToProps = (state) => {
    return {
        blogs: state.blogs
    }
}

export default connect(mapStateToProps)(BlogsList);
