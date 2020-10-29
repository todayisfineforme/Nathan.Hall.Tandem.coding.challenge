import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Header extends Component {
    state={
        questions: "1"
    }

    render(){
        return(
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href='/'>Tandem Trivia</Navbar.Brand>
                <Nav>
                    <Nav.Link href='/trivia'>start the quiz</Nav.Link>
                    <Nav.Link href='/portfolio'>Check My Portfolio</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

export default Header;
