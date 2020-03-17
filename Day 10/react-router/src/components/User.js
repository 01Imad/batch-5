import React from 'react';

export default function User(props){
    console.log(props)
    return(
        <div>
            <h3>User is: {props.match.params.id}</h3>
        </div>
    )
}