import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import QuestionContainer from './questionContainer';
import AnswerContainer from './answerContainer';

const questionData = require('../data/Apprentice_TandemFor400_Data.json');

function QuestionDisplay(){
    
    const [starter, setStarter] = useState(questionData);
    const [round, setRound] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const shuffle = (array) => {
        let i = array.length - 1;
        for (; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    };
    
    const questionsLog = () => {
        console.log(starter);
        console.log(starter[0]);
        console.log(starter[0].correct);
    };

    useEffect(() => {
        questionsLog();
        shuffle(starter);
        questionsLog();
    });

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

export default QuestionDisplay;