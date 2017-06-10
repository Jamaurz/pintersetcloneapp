import React from 'react';
import { Col, Button, Thumbnail, ListGroup, ListGroupItem } from 'react-bootstrap';

export default function Event(props) {
    let button;
    if (props.mode == 'winboard') {
        button = <Button bsStyle="danger" onClick={props.removeImage}>Delete</Button>;
    } else if (props.mode == 'home') {
        button = <span>sina</span>
    }
    return (
        <Col xs={12} sm={6} md={4}>
            <Thumbnail src={props.item.source} alt={props.item.title}>
                <ListGroup>
                    <ListGroupItem>{props.item.title}</ListGroupItem>
                    <ListGroupItem href="#">{props.item.ownername}</ListGroupItem>
                </ListGroup>
                <p>
                    { button }
                </p>
            </Thumbnail>
        </Col>
        )
}