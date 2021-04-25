import { Form, Button } from "react-bootstrap"
import React, { Component } from 'react'

class BlogForm extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            title: props.blog ? props.blog.title: "" ,
            description:  props.blog ? props.blog.description: "",
            error:""
        }
    }
    

    

    onTitleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    onDescChange = (e) => {
        this.setState({
            description: e.target.value
        })
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        if(!this.state.title || !this.state.description)
        {
            this.setState({
                error:"Hata !"
            })
        }
        else{
            this.props.onSubmit({
                title: this.state.title,
                description:this.state.description,
                dateAdded: Date.now(),
            })
        }
    }

    render() {
        return (
            <Form onSubmit={this.onFormSubmit} >
                <Form.Control
                    value={this.state.title}
                    placeholder="Title"
                    className="mb-2"
                    onChange={this.onTitleChange}
                />

                <Form.Control
                    value={this.state.description}
                    placeholder="Description"
                    className="mb-2"
                    onChange={this.onDescChange} />
                <Button type="submit">
                    Save
                </Button>
            </Form>
        )
    }
}

export default BlogForm
