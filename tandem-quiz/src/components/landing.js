import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Table from 'react-bootstrap/Table';
import '../App.css';

function Landing(){
    return(
        <Container>
            <Jumbotron>
                <Row>
                    <Col>
                        <h1>The Tandem for 400 trivia trainer!</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2> Goal: Score 400 pts</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span:6, offset:3}}>
                        <h5>The Rules: it's Trivia! Test your knowledge and answer some trivia. There are twelve seconds on the clock for each question, and you score less points the longer you take.</h5>
                    </Col>
                </Row>
                <Row >
                    <Col md={{ span:4, offset:4}}>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>Seconds on the clock</th>
                                    <th>Points</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>12-8</td>
                                    <td>40</td>
                                </tr>
                                <tr>
                                    <td>7-6</td>
                                    <td>30</td>
                                </tr>
                                <tr>
                                    <td>5-4</td>
                                    <td>20</td>
                                </tr>
                                <tr>
                                    <td>4-2</td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <td>2-0</td>
                                    <td>5</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Jumbotron>
        </Container>
    )
}

export default Landing;