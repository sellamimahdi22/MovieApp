import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap'
import StarRating from './StarRating'

const Filter = ({text,handleChange,rating,handleRating}) => {
    return (
        <div className="search">

<Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Movie App</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
      </Nav>
      <Form className="d-flex">
        <FormControl
        value={text} onChange={handleChange}
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button class="btn btn-secondary btn-lg btn-block" variant="outline-success">Search</Button>
        <StarRating rat={rating} handleRating={handleRating}/>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>



































            {/* <div>
                <input type="text" placeholder="Search.." value={text} onChange={handleChange}/>
               
            </div> */}
        </div>
    )
}

export default Filter
