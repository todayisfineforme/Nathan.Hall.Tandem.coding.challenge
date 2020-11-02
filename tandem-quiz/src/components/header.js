import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Header extends Component {

    render(){
        return(
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href='/'><h3>Tandem Trivia</h3></Navbar.Brand>
                <Nav>
                    <Nav.Link href='/trivia'>Restart the quiz</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

export default Header;
