import React from 'react';
import { Col, Button, Thumbnail, ListGroup, ListGroupItem } from 'react-bootstrap';

export default function MyTumbnail(props) {
    if (props.item.length > 0) {
        if (props.id == props.item[0].owner) {
            return (
                <Col xs={6} md={4}>
                    <Thumbnail class="grid-item">
                        <ListGroup>
                            <ListGroupItem>Add New Item</ListGroupItem>
                        </ListGroup>
                        <p>
                            <Button bsStyle="primary" onClick={props.openModal}>Add</Button>
                        </p>
                    </Thumbnail>
                </Col>
            )
        } else {
            return <div></div>
        }
    } else {
        return <div></div>
    }
}