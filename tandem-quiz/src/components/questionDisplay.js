import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import QuestionContainer from './questionContainer';
import AnswerContainer from './answerContainer';

class QuestionDisplay extends Component{
    render(){
        return(
            <Container>
                <Jumbotron>
                    <Row>
                        <Col>
                            <QuestionContainer/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <AnswerContainer/>
                        </Col>
                    </Row>
                </Jumbotron>
            </Container>
        )
    }
}

export default QuestionDisplay;