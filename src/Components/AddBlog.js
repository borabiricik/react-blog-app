import React from 'react'
import { addBlog } from '../actions/blogs'
import BlogForm from "./BlogForm"
import {connect} from "react-redux"


const AddBlog = (props) => {
    return (
        <BlogForm onSubmit={(blog)=>{
            props.dispatch(
                addBlog(blog)
            )
            props.history.push("/posts")
        }} />
    )
}

export default connect()(AddBlog)
