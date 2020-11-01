import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function QuestionContainer(props){
    return(
        <h1>{props.question}</h1>
    )
}

export default QuestionContainer;