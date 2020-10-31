import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AnswerSelection from './answerSelection';

function AnswerContainer(){
    return(
        <Container>
            <Row>
                    <AnswerSelection/>
                    <AnswerSelection/>
            </Row>
            <Row>
                    <AnswerSelection/>
                    <AnswerSelection/>
            </Row>
        </Container>
    )
}

export default AnswerContainer;