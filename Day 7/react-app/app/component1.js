import React, { Component } from 'react';
import PrintName from './PrintName';

class Component1 extends Component {

    render() {
        const name = "Imad Ahmed"
        return (
            <div>
                <h2 className="boldText color-blue">
                    React is awesome!
                </h2>
                <PrintName personsName={name} />
                {this.props.personsObj}
            </div>
        );
    }
}

export default Component1;

