import React from 'react'
import { connect } from "react-redux"

@connect((store, ownProps) => {
    return {
        params: ownProps.routeParams
    };
})
export default class Start extends React.Component {
    render() {
        return (
            <div>
                <h1>Edit {this.props.params.id}</h1>
            </div>
        )
    }
}