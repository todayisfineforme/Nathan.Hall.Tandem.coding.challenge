import React from 'react';
import Col from 'react-bootstrap/Col';

function Timer(props){
    return(
        <Col>
            <h1 style={{textAlign:"left"}}> Timer: {props.timer}</h1>
        </Col>
    )
}

export default Timer;