import './App.css';
import { Route, Switch } from 'react-router-dom';
import React, { Component } from "react";
import Landing from './components/landing';
import QuizDisplay from './components/quizDisplay';

class App extends Component{
    render(){
        return (
            <Switch>
                <Route exact path='/' component={Landing} />
                <Route path='/trivia' component={QuizDisplay}/>
                {/* <Route path='/portfolio' component={} /> */}
            </Switch>
        );
    }
}

export default App;
