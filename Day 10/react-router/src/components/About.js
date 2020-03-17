import React from 'react';
import Sidebar from './Sidebar';

export default function About(props){
    console.log(props)
    return(
        <div>
            <h3>About</h3>
            <Sidebar />
        </div>
    )
}