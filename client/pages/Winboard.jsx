import React from 'react';
import { connect } from "react-redux"

import { Grid, Row, Col, Thumbnail, ListGroup, ListGroupItem, Button } from 'react-bootstrap';

import MyModal from '../components/MyModal.jsx'
import MyImage from '../components/Image.jsx'

import { showModal, hideModal } from '../actions/mymodalActions'
import { getImgsOwner, storeWinboard, addImage, removeImg } from '../actions/imageActions'

@connect((store) => {
    return {
        user: store.twitter.user,
        winboard: store.image.winboard
    };
})
export default class Recipe extends React.Component {
    componentWillMount() {
        this.getImgs = this.getImgs.bind(this);
        this.getImgs();
    }
    
    getImgs() {
        let newThis = this;
        getImgsOwner(function(data) {
            newThis.props.dispatch(storeWinboard(data));
        });
    }
    
    openModal() {
        this.props.dispatch(showModal());
    }
    
    send(state) {
        var newThis = this;
        addImage(state, function(data) {
            //console.log('addImage model', data)
            newThis.props.dispatch(hideModal());
            newThis.getImgs();
        });
    }
    
    removeImage(id) {
        console.log('remove image with id', id);
        let newThis = this;
        removeImg(id, function(data) {
            newThis.getImgs();
        });
    }
    
    render() {
        return (
            <div>
                <MyModal send={this.send.bind(this)} />
                <Grid>
                    <Row class="show-grid">
                        <Col xs={12} md={12}>
                            <Col xs={6} md={4}>
                                <Thumbnail>
                                <ListGroup>
                                    <ListGroupItem>Add New Item</ListGroupItem>
                                </ListGroup>
                                <p>
                                    <Button bsStyle="primary" onClick={this.openModal.bind(this)}>Add</Button>
                                </p>
                                </Thumbnail>
                            </Col>
                            {this.props.winboard.map((item) => {
                                return <MyImage key={item._id} mode="winboard" item={item} removeImage={() => {this.removeImage(item._id) }} />
                            })
                            }
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}