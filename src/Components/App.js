import React, { } from 'react'
import "./styles/main.scss"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import About from "./About"
import Home from "./Home"
import Posts from "./Posts"
import BlogDetails from "./BlogDetails"
import {
  Navbar,
  Container,
  Nav,
} from "react-bootstrap"
import AddBlog from './AddBlog'
import UpdateBlog from './UpdateBlog'

const App = (props) => {
  return (
    <>
      <Router>
        <Navbar bg="primary" expand="lg" >
          <Container>

            <Navbar.Brand >
              <Link to="/"
                className="text-white"
              >
                Blog App
                                </Link>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav" >
              <Nav className="row justify-content-around w-25">
                <Link
                  to="/"
                  className="text-white"
                >Home
                    </Link>
                <Link
                  to="/about"
                  className="text-white"
                >About
                    </Link>
                <Link
                  to="/posts"
                  className="text-white"
                >Posts</Link>
                <Link
                  to="/create"
                  className="text-white"
                >Create Post</Link>

              </Nav>
            </Navbar.Collapse>



          </Container>
        </Navbar>

        <Container>



          <Switch>
            <Route exact path="/" >
              <Home />
            </Route>

            <Route path="/about" >
              <About />
            </Route>

            <Route exact path="/posts" >
              <Posts />
            </Route>

            <Route path="/blogs/:id" component={BlogDetails} />
            <Route path="/create" component={AddBlog} />
            <Route path="/edit/:id" component={UpdateBlog} />
          </Switch>
        </Container>


      </Router>





    </>
  )

}

export default App

