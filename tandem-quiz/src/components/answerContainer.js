import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import AnswerSelection from './answerSelection';

function AnswerContainer(props){
    const [buttonState, setButtonState] = useState(false)
    
    console.log(props);

    function disableButton(){
        setButtonState(true);
    }

    function enableButton(){
        setButtonState(false);
    }

    return(
        <Container>
                {[...props.answers].map((answer) =>
                    <AnswerSelection 
                        updateButton={props.updateButton}
                        updateScore={props.updateScore} 
                        disableButton={disableButton}
                        enableButton={enableButton}
                        correct={props.correct} 
                        key={answer} 
                        answer={answer}
                        isDisabled={buttonState}
                    />
                )}
        </Container>
    )
}

export default AnswerContainer;