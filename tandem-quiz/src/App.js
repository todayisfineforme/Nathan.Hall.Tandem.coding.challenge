import { Route, Switch } from 'react-router-dom';
import React, { Component } from "react";
import Landing from './components/landing';
import QuizDisplay from './components/quizDisplay';
import { roundConstructor } from './logic/roundConstructor';
import FinalScore from './components/finalScore';

// importing json question data supplied by the challenge
const questionData = require('./data/Apprentice_TandemFor400_Data.json');

class App extends Component{  
    state = {
        round: [{question:"", answers:[], correct:""}],
        currentQuestion: 0,
        score: 0,
        timer: 12
    }

    //timer function to countdown from 12 to 0, passed down to child timer component
    quizTimer = () => {
        this.myInterval = setInterval(() => {
            if (this.state.timer > 0) {
                this.setState({ timer: this.state.timer - 1})
            }else if (this.state.timer < 0) {
                clearInterval(this.myInterval)
            }
        }, 1000)
    }

    //conditionals determine lower point payout vs. how much time is left on the clock
    updateScore = () =>{
        if (this.state.timer >= 8){
            this.setState({ score: this.state.score + 40 });
        }else if (this.state.timer < 8 && this.state.timer >= 6){
            this.setState({ score: this.state.score + 30 });
        }else if (this.state.timer < 6 && this.state.timer >= 4){
            this.setState({ score: this.state.score + 20 });
        }else if (this.state.timer < 4 && this.state.timer >= 2){
            this.setState({ score: this.state.score + 10 });
        }else if (this.state.timer < 2){
            this.setState({ score: this.state.score + 5 });
        }
        //small timeout ensures session storage updates after state updates but before href redirect happens on final question
        setTimeout(() => {
            //using sessionStorage to get around the react-router-dom resetting state on render of this component
            sessionStorage.setItem('score', this.state.score);
        }, 50);
    }

    //updates currentQuestion count on answerSelection child button press
    updateButton = () => {
        setTimeout(() => {
            this.setState({ currentQuestion: this.state.currentQuestion + 1 });
            this.setState({timer: 12});
        }, 2000);
    }

    //function builds ten question round and set that array in the state
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
                <Route path='/finalScore' render={(props) =>( <FinalScore {...props} score={this.state.score} />)}/>
            </Switch>
        );
    }
}

export default App;
