import React from 'react';
import { Link } from 'react-router';
import { connect } from "react-redux"

import {add, addEvent, singIn, singInTwitter, getEvent, getAllEvent} from "../actions/commonActions"
import { goal } from '../actions/commonActions'

import Login from '../components/Login.jsx';

import './Layout.sass';

@connect((store, ownProps) => {
    //console.log('ownProps', ownProps);
    return {
        user: store.twitter.user.displayName,
        goal: store.common.goal
    };
})
export default class Layout extends React.Component {
    componentWillMount() {
        var tempThis = this;
        singIn(function(data) {
            tempThis.props.dispatch(singInTwitter(data));
            tempThis.props.router.push(tempThis.props.goal);
        });
        
        this.props.dispatch(goal(this.props.location.pathname))
        if(!this.props.user) {
            this.props.router.push('/');
        }
    }
    
    render() {
        
        return (
            <div class='appContainer'>
                <div class='navigation'>
                    <Login login={this.props.user} />
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}