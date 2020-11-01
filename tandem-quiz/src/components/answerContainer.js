import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AnswerSelection from './answerSelection';

function AnswerContainer(props){
    console.log(props);
    return(
        <Container>
                {[...props.answers].map((answer) =>
                <AnswerSelection updateButton={props.updateButton} answer={answer}/>
                )}
        </Container>
    )
}

export default AnswerContainer;