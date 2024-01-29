import React from "react";
import Card from 'react-bootstrap/Card';
import Allplayers from "../Allplayers";

const Player = (props) => {
    console.log(props.data)
    return (
        // partie card
        <Card style={{ width: '18rem', margin: "0px 0px 0px 20px", boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Card.Img style={{ width: '300px' }} src={props.data.imageUrl} alt="image" />
            <Card.Body>
                {/* title */}
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
// partie default
Allplayers.defaultProps = {
    name: 'ahmed mhamed',
    age: '20years',
    jerseyNumber: '10',
    nationality: 'tunisien',
    team: 'tunis',
    photo:
        'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
}
export default Player;
