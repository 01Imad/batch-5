import React from 'react';

import {Route, Redirect} from "react-router-dom"

function PrivateRoute(props){
    const {isAuthenticated} = props
    const Component = props.component;
    return(
        <>
            {/* {isAuthenticated ? <Route 
                        {...props} 
                        render = {()=> <component/>}/>
                        
                :<Redirect to="/login"></Redirect>} */}
                <Route render={(props) => 
                                isAuthenticated
                                ? 
                                (<Component {...props} />) 
                                : <Redirect to="/login" />} 
        />
        </>
        
    )
}

export default PrivateRoute;