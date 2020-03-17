import React from 'react';

import {withRouter} from 'react-router-dom';

function Home2(props){
    console.log(props)
    return(
        <div>
            <h1>From Home 2</h1>
        </div>
    )
}

export default withRouter(Home2);