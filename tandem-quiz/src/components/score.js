import React from 'react';
import Col from 'react-bootstrap/Col';

function Score(props){
    return(
        <Col>
            <h1 style={{ textAlign: "right" }}>Score: {props.score}</h1>
        </Col>
    )
}

export default Score;