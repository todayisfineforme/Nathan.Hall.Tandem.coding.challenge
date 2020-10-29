import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import QuestionContainer from './questionContainer';
import AnswerContainer from './answerContainer';

class QuestionDisplay extends Component{
    render(){
        return(
            <Container>
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
            </Container>
        )
    }
}

export default QuestionDisplay;