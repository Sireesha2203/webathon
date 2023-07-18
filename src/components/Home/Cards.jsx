import React from 'react';
import { Card } from 'react-bootstrap';
import './Cards.css';

function Cards(props) {
  return (
    <Card style={{ width: '18rem' }} className='card-style'>
      <Card.Body>
        <Card.Title>{props.data.title}</Card.Title>
        <Card.Text>
          {props.data.desc}  
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Cards;
