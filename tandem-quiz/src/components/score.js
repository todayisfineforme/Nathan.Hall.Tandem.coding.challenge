import React from 'react';
import Col from 'react-bootstrap/Col';

function Score(props){
    return(
        <Col md={{ span: 4, offset: 4 }}>
            <h1>Score: {props.score}</h1>
        </Col>
    )
}

export default Score;