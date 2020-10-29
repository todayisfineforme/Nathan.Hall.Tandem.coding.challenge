import './App.css';
import { Route, Switch } from 'react-router-dom';
import React, { Component } from "react";
import Landing from './components/landing';
import QuestionDisplay from './components/questionDisplay';

class App extends Component{
    render(){
        return (
            <Switch>
                <Route exact path='/' component={Landing} />
                <Route path='/trivia' component={QuestionDisplay}/>
                {/* <Route path='/portfolio' component={} /> */}
            </Switch>
        );
    }
}

export default App;
