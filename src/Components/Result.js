import React, { Component } from 'react';
import { connect } from 'react-redux';

class Result extends Component {
    render() {
        return (
            <h2>{this.props.counterResult}</h2>
        );
    }
}

function mapStateToProps(state) {
    return {
        counterResult:state
    };
}

export default connect(
    mapStateToProps,
)(Result);