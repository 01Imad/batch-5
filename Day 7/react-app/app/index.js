import React, { Component } from "react";
import ReactDom from "react-dom";

import './index.css';

import Persons from "./Persons";
import Friends from "./Friends";
class App extends Component {
    render() {
        const persons = [
            {
                name: "xyz",
                email: "abc@xyz.com"
            },
            {
                name: "abc",
                email: "ghj@xyz.com"
            },
            {
                name: "dfg",
                email: "dfg@xyz.com"
            }
        ]
        const friends = [
            {
                name: "xyz",
                isFriend: true
            },
            {
                name: "abc",
                isFriend: false
            },
            {
                name: "ghj",
                isFriend: true
            },
            {
                name: "ijk",
                isFriend: false
            },
        ]
        return (
            <div>
                <h1>Persons</h1>
                <Persons persons={persons} />
                {/* {
                    persons.map((person)=>{
                        return <div>
                            <h1>{person.name}</h1>
                            <p>{person.email}</p>
                        </div>
                    })
                } */}
                <Friends friends={friends} />
            </div>
        )
    }
}

ReactDom.render(<App />, document.getElementById("main"))

