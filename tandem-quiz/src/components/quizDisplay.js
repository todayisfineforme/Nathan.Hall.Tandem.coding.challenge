import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import QuestionContainer from './questionContainer';
import AnswerContainer from './answerContainer';
import Score from './score';
import Timer from './timer';

class QuizDisplay extends Component{

    componentDidMount(){
        this.props.roundOfTen();
        this.props.quizTimer();
    }

    render(){
        return(
            <Container>
                <Jumbotron>
                    <Row>
                        <Timer timer={this.props.timer}/>
                        <Score score={this.props.score}/>
                    </Row>
                    <Row>
                        <Col>
                            <QuestionContainer question={this.props.round[this.props.currentQuestion].question}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <AnswerContainer 
                                updateButton={this.props.updateButton} 
                                answers={this.props.round[this.props.currentQuestion].answers}
                                correct={this.props.round[this.props.currentQuestion].correct}
                                updateScore={this.props.updateScore}
                            />
                        </Col>
                    </Row>
                </Jumbotron>
            </Container>
        )
    }
}

export default QuizDisplay;