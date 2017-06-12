import React from 'react';
import { connect } from "react-redux"

import { Grid, Row } from 'react-bootstrap';
import Masonry from 'react-masonry-component';

import MyModal from '../components/MyModal.jsx'
import MyImage from '../components/Image.jsx'
import MyTumbnail from '../components/MyTumbnail.jsx'

import { showModal, hideModal } from '../actions/mymodalActions'
import { getImgsOwner, storeWinboard, addImage, removeImg } from '../actions/imageActions'

@connect((store, ownProps) => {
    return {
        user: store.twitter.user,
        id: store.twitter.user.id,
        winboard: store.image.winboard,
        params: ownProps.routeParams
    };
})
export default class Recipe extends React.Component {
    componentWillMount() {
        this.getImgs = this.getImgs.bind(this);
        this.getImgs();
    }
    
    getImgs() {
        let newThis = this;
        let id = this.props.id;
        if (this.props.params.id) {
            id = this.props.params.id;
        }
        getImgsOwner(id, function(data) {
            newThis.props.dispatch(storeWinboard(data));
        });
    }
    
    openModal() {
        this.props.dispatch(showModal());
    }
    
    send(state) {
        var newThis = this;
        addImage(state, function(data) {
            newThis.props.dispatch(hideModal());
            newThis.getImgs();
        });
    }
    
    removeImage(id) {
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
                    <Row>
                        <MyTumbnail id={this.props.id} item={this.props.winboard} openModal={this.openModal.bind(this)}/>
                    </Row>
                    <Row class="show-grid">
                        <Masonry>
                            {this.props.winboard.map((item) => {
                                return <MyImage key={item._id} id={this.props.id} mode="winboard" item={item} removeImage={() => {this.removeImage(item._id) }} />
                            })
                            }
                        </Masonry>
                    </Row>
                </Grid>
            </div>
        )
    }
}