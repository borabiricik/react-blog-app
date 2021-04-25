import React from 'react'
import { connect } from "react-redux"
import BlogForm from './BlogForm'
import { removeBlog, updateBlog } from "../actions/blogs"
import { Button } from 'react-bootstrap'

const UpdateBlog = (props) => {

    return (
        <>
            <h2>Update Blog</h2>
            <BlogForm
                blog={props.blog}
                onSubmit={(blog) => {
                    console.log(props.blog.id);
                    props.dispatch(updateBlog(props.blog.id, blog))
                    props.history.push("/posts")
                }

                }



            />

            <Button
                onClick={() => {
                    props.dispatch(removeBlog(props.blog.id))
                    props.history.push("/posts")
                }}
            >
                Remove
            </Button>
        </>
    )
}

const mapStateToProps = (state, props) => {
    return {
        blog: state.blogs.find((blog) => {
            return blog.id === props.match.params.id
        })
    }
}

export default connect(mapStateToProps)(UpdateBlog)
