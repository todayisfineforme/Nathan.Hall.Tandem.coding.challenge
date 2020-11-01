import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import QuestionContainer from './questionContainer';
import AnswerContainer from './answerContainer';
import Score from './score';
// import { shuffle } from '../logic/shuffle';
// import { questionConstructor } from '../logic/questionConstructor';
import { roundConstructor } from '../logic/roundConstructor';

const questionData = require('../data/Apprentice_TandemFor400_Data.json');

class QuizDisplay extends Component{
    state = {
        round: [{question:"", answers:[], correct:""}],
        currentQuestion: 0,
        score: 0 
    }

    updateScore = () =>{
        this.setState({ score: this.state.score + 1 });
        console.log(this.state.score);
    }

    updateButton = () => {
        console.log(this.state.round);
        setTimeout(() => {
            this.setState({ currentQuestion: this.state.currentQuestion + 1 })
        }, 3000);
    }

    roundOfTen = () => {
        this.setState({
            round:roundConstructor(questionData)
        })
    }

    componentDidMount(){
        this.roundOfTen();
    }

    render(){
        return(
            <Container>
                <Jumbotron>
                    <Row>
                        <Score score={this.state.score}/>
                    </Row>
                    <Row>
                        <Col>
                            <QuestionContainer question={this.state.round[this.state.currentQuestion].question}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <AnswerContainer 
                                updateButton={this.updateButton} 
                                answers={this.state.round[this.state.currentQuestion].answers}
                                correct={this.state.round[this.state.currentQuestion].correct}
                                updateScore={this.updateScore}
                            />
                        </Col>
                    </Row>
                </Jumbotron>
            </Container>
        )
    }
}

export default QuizDisplay;