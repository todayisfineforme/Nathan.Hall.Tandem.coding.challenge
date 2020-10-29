import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class AnswerSelection extends Component{
    render(){
        return(
            <Button variant="secondary" size="lg" className='my-2' block>
                Large button
            </Button>
        )
    }
}

export default AnswerSelection;