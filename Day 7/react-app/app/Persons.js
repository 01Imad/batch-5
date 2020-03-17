import React, { Component } from 'react';


class Persons extends Component {
    render(){
        return(
            <div>
                <p>From Persons Component</p>
                {
                    this.props.persons.map((person, i)=>{
                        return <div key={i}>
                            <h1>{person.name}</h1>
                            <p>{person.email}</p>
                        </div>
                    })
                }
            </div>
        )
    }
}

export default Persons;