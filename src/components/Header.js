import React, { Component } from 'react';
import { Container, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCloudSun, faBell } from '@fortawesome/free-solid-svg-icons'



export class Header extends Component {
   render() {
      return (
         <>

            <Navbar bg="light" expand="lg" fixed='top' className="new-header">
               <Container>
                  <Navbar.Brand href="#home" className='d-flex'>
                     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" className='profile-img' />
                     <div>
                        <b>Hi, Anonymous </b>
                        <p>How do you feel today</p>
                     </div>
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <div className='d-flex '>
                     <Form className="d-flex justify-content-around align-items-center">
                        <FormControl
                           type="search"
                           placeholder="Search"
                           className="me-2"
                           aria-label="Search"
                        />
                        {/* <Button variant="outline-success">Search</Button> */}
                        <div className='icons'>
                           <FontAwesomeIcon icon={faBell} size='lg' />
                        </div>
                        <div className='icons d-flex'>
                           <FontAwesomeIcon icon={faCloudSun} size='lg' />
                           <span> 32c</span>
                        </div>


                     </Form>
                  </div>

               </Container>
            </Navbar>
         </>
      )
   }
}

export default Header;
