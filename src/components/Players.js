import React from "react";
import Card from 'react-bootstrap/Card';

const Player = (props) => {
    console.log(props.data)
    return (
        <Card style={{ width: '18rem', margin: "0px 0px 0px 20px", boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Card.Img style={{ width: '300px' }} src={props.data.imageUrl} alt="image" />
            <Card.Body>
                <Card.Title style={{ fontSize: '20px', color: 'Red' }}>{props.data.name}</Card.Title>
                <Card.Text style={{ fontSize: '16px', color: 'black' }}>
                    <p>{props.data.team}</p>
                    <p>{props.data.nationality}</p>
                    <p>{props.data.jerseyNumber}</p>
                    <p>{props.data.age}</p>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};
export default Player;
