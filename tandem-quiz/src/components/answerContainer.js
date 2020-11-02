import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import AnswerSelection from './answerSelection';

function AnswerContainer(props){
    const [buttonState, setButtonState] = useState(false)

    //passed down to child so that a button click in a single child disables all the buttons under this parent
    function disableButton(){
        setButtonState(true);
    }

    //enables all of the buttons again under this parent
    function enableButton(){
        setButtonState(false);
    }

    return(
        <Container>
                {[...props.answers].map((answer) =>
                    <AnswerSelection 
                        currentQuestion={props.currentQuestion}
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