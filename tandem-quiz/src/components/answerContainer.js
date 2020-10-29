import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AnswerSelection from './answerSelection';

class AnswerContainer extends Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col>
                        <AnswerSelection/>
                    </Col>
                    <Col>
                        <AnswerSelection/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <AnswerSelection/>
                    </Col>
                    <Col>
                        <AnswerSelection/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default AnswerContainer;