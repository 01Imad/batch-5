import React, { PureComponent } from 'react';

//local imports 

import Repo from "./Repo";

class Grid extends PureComponent {
    componentDidUpdate(){
        console.log("Component Updated!")
    }
    render() {
        const recvData = this.props.data;
        return (
            <div>
                <h2>From Grid Comp</h2>
                {recvData.length === 0 ? <span>Loading...</span> 
                    : <div className="grid">
                    {recvData.map((repo, i) => {
                        return <Repo key={i} repo = {repo} />
                    })}
                </div>}
            </div>
        );
    }
}

export default Grid;