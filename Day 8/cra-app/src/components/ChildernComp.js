import React, { Component } from 'react';

class ChildernComponet extends Component {
    render(){
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default ChildernComponet;