import React, { useState } from 'react';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function AnswerSelection(props) {
    const [answerConfirm, setConfirm] = useState('secondary')

    function checkAnswer(){
        if (props.correct === props.answer) {
            setConfirm('success')
        }else{
            setConfirm('danger')
        }
    }

    function buttonHandler(){
        props.disableButton();
        checkAnswer();
        props.updateButton();
        setTimeout(() => {
            props.enableButton();
        }, 3000); 
    }

    return(
        <Row>   
            <Col>
                <Button 
                    variant={answerConfirm} 
                    size="lg" 
                    className='my-2' 
                    onClick={buttonHandler}
                    disabled={props.isDisabled}
                    block
                >
                    {props.answer}
                </Button>
            </Col>
        </Row> 
    )
}

export default AnswerSelection;