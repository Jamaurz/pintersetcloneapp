import React from 'react';
import { connect } from "react-redux"

import { Grid, Row, Jumbotron } from 'react-bootstrap';
import MasonryInfiniteScroller from 'react-masonry-infinite';

import { getImgs, storeWinboardHome } from '../actions/imageActions'
import MyImage from '../components/Image.jsx'


@connect((store) => {
    return {
        user: store.twitter.user.displayName,
        id: store.twitter.user.id,
        winboardHome: store.image.winboardHome
    };
})
export default class Recipe extends React.Component {
    componentWillMount() {
        this.getImgsHome = this.getImgsHome.bind(this);
        this.getImgsHome();
    }
    
    getImgsHome() {
        let newThis = this;
        getImgs(function(data) {
            newThis.props.dispatch(storeWinboardHome(data));
        });
    }
    
    render() {
        return (
            <Grid>
                <Row class="show-grid">
                    <Jumbotron>
                        <h1>Pinterest Clone</h1>
                        <p>
                            I can login with Twitter, link to images, delete images that 
                            I've linked to, see a Pinterest-style wall of all the images 
                            I've linked to, browse other users' walls of images, if I upload an image that is broken, 
                            it will be replaced by a placeholder image.
                        </p>
                    </Jumbotron>
                    <MasonryInfiniteScroller>
                    {
                        this.props.winboardHome.map((item) => {
                            return <MyImage mode="home" id={this.props.id} key={item._id} item={item} />
                        })
                    }
                    </MasonryInfiniteScroller>
                </Row>
            </Grid>
        )
    }
}