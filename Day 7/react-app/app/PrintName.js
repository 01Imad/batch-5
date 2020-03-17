import React, { Component } from 'react';

class PrintName extends Component {
    render() {
        return (
            <p>{this.props.personsName}</p>
        )
    }
}

export default PrintName;