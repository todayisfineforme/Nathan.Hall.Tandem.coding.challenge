import './App.css';
import { Route, Switch } from 'react-router-dom';
import React, { Component } from "react";
import Landing from './components/landing';
import QuizDisplay from './components/quizDisplay';
import { roundConstructor } from './logic/roundConstructor';
const questionData = require('./data/Apprentice_TandemFor400_Data.json');

class App extends Component{
    
    state = {
        round: [{question:"", answers:[], correct:""}],
        currentQuestion: 0,
        score: 0,
        timer: 12
    }

    quizTimer = () => {
        this.myInterval = setInterval(() => {
            if (this.state.timer > 0) {
                this.setState({ timer: this.state.timer - 1})
            }else if (this.state.timer < 0) {
                clearInterval(this.myInterval)
            }
        }, 1000)
    }

    updateScore = () =>{
        this.setState({ score: this.state.score + 1 });
    }

    updateButton = () => {
        setTimeout(() => {
            this.setState({ currentQuestion: this.state.currentQuestion + 1 });
            this.setState({timer: 12})
        }, 3000);
    }

    roundOfTen = () => {
        this.setState({
            round:roundConstructor(questionData)
        })
    }

    render(){
        return (
            <Switch>
                <Route exact path='/' component={Landing} />
                <Route path='/trivia' 
                    render={(props) => (
                        <QuizDisplay {...props} 
                            round={this.state.round}
                            currentQuestion={this.state.currentQuestion}
                            score={this.state.score}
                            timer={this.state.timer}
                            quizTimer={this.quizTimer}
                            updateScore={this.updateScore}
                            updateButton={this.updateButton}
                            roundOfTen={this.roundOfTen}
                        />)
                    }
                />
                {/* <Route path='/portfolio' component={} /> */}
            </Switch>
        );
    }
}

export default App;
