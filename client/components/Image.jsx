import React from 'react';
import { Col, Button, Thumbnail, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router';

export default function Image(props) {
    let button;
    if (props.mode == 'winboard') {
        button = <i></i>
        if (props.id == props.item.owner) {
            button = <Button bsStyle="danger" onClick={props.removeImage}>Delete</Button>;
        }
    } else if (props.mode == 'home') {
        button = <Link to={`winboard/${props.item.owner}`}><Button bsStyle="success" >Visit wall</Button></Link>;
    }
    return (
        <Col xs={12} sm={6} md={4}>
            <Thumbnail src={props.item.source} alt={props.item.title}>
                <ListGroup>
                    <ListGroupItem>Title: {props.item.title}</ListGroupItem>
                    <ListGroupItem>Author: {props.item.ownername}</ListGroupItem>
                </ListGroup>
                <p>
                    { button }
                </p>
            </Thumbnail>
        </Col>
        )
}