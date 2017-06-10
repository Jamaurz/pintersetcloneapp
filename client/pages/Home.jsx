import React from 'react';
import { connect } from "react-redux"

import { getImgs, storeWinboardHome } from '../actions/imageActions'
import MyImage from '../components/Image.jsx'

@connect((store) => {
    return {
        user: store.twitter.user,
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
            <div>
                <h1>Home</h1>
                {
                    this.props.winboardHome.map((item) => {
                        return <MyImage mode="home" key={item._id} item={item} />
                    })
                }
            </div>
        )
    }
}