import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';

//using sessionStorage to get around the react-router-dom resetting state on render of this component
const final = sessionStorage.getItem('score');

function FinalScore(props){
    console.log(props);
    return(
        <Container>
            <Jumbotron>
                <Row>
                    <Col>
                        <h1>Final Score!</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>{final}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <Button variant="secondary" size="lg " href="/trivia">Try Again?</Button>
                    </Col>
                </Row>
            </Jumbotron>
        </Container>
    )
}

export default FinalScore