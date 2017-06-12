import React from 'react';
import { connect } from "react-redux"

import { showModal, hideModal } from '../actions/mymodalActions'
import { ButtonToolbar, Button, Modal, Grid, Row, Col, Image, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

@connect((store) => {
    return {
        show: store.mymodal.show
    };
})
export default class MyModal extends React.Component {
    constructor(props) {
        super(props);
        this.showModal = this.showModal.bind(this);
        this.hideModal= this.hideModal.bind(this);
        this.state = {
            title: '',
            source: ''
        }
    }

    showModal() {
        this.props.dispatch(showModal());
    }

    hideModal() {
        this.setState({
           title: '',
           source: ''
        });
        this.props.dispatch(hideModal());
    }
    
    changeTitle(e) {
       this.setState({
           title: e.target.value
       });
    }
    
    changeSource(e) {
       this.setState({
           source: e.target.value
       });
    }
    
    setPlaceholder() {
        this.setState({
            source: 'http://www.mot.be/assets/images/imports/blocks-image/placeholder_image_1.png'
        })
    }
    
    add() {
        this.props.send(this.state);
    }

    render() {
        return (
            <ButtonToolbar>
                <Modal
                    show={this.props.show}
                    onHide={this.hideModal}
                    dialogClassName="custom-modal"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Add Image</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Grid>
                            <Row>
                                <Col sm={9} md={6} >
                                    <Image src={this.state.source} thumbnail onError={this.setPlaceholder.bind(this)} />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={9} md={6}>
                                    <form>
                                        <FormGroup controlId="formValidationNull" validationState={null}>
                                            <ControlLabel>Title</ControlLabel>
                                            <FormControl type="text" value={this.props.title} onChange={this.changeTitle.bind(this)} />
                                        </FormGroup>
                                        <FormGroup controlId="formValidationNull" validationState={null}>
                                            <ControlLabel>Source Link</ControlLabel>
                                            <FormControl type="text" value={this.props.source} onChange={this.changeSource.bind(this)} />
                                        </FormGroup>
                                        <Button  onClick={this.add.bind(this)}>
                                            Send
                                        </Button>
                                    </form>
                                </Col>
                            </Row>
                        </Grid>
                    </Modal.Body>
                </Modal>
            </ButtonToolbar>
        )
    }
}