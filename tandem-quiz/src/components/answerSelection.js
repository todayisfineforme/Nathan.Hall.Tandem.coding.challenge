import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function AnswerSelection(props) {
    const [answerConfirm, setConfirm] = useState('secondary')
    const [finalQuestion, setFinalQuestion] = useState(null)

    //check the button specific prop.answer against the group wide prop.correct and changes the variant
    //to indicate a correct("success") or incorrect("danger") answer
    function checkAnswer(){
        if (props.correct === props.answer) {
            setConfirm('success')
            props.updateScore();
        }else{
            setConfirm('danger')
        }
    }

    //takes in the higher level prop function to disable all buttons after one is clicked to prevent multiple clicks
    //then enables all buttons for next question. timeout matches the timeout of the function that increases the "currentQuestion" state count
    function buttonHandler(){
        props.disableButton();
        checkAnswer();
        props.updateButton();
        setTimeout(() => {
            props.enableButton();
        }, 2000); 
    }

    //enables an href link to the final score page only on the buttons of the final(10th) question
    useEffect(() => {
        if (props.currentQuestion === 9){setFinalQuestion("/finalScore")}
    }, [props.currentQuestion])

    return(
        <Row>   
            <Col>
                <Button 
                    variant={answerConfirm} 
                    size="lg" 
                    className='my-2' 
                    onClick={buttonHandler}
                    disabled={props.isDisabled}
                    href={finalQuestion}
                    block
                >
                    {props.answer}
                </Button>
            </Col>
        </Row> 
    )
}

export default AnswerSelection;