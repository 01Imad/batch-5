import React from 'react';
import { Link } from 'react-router-dom';
import Home2 from "./Home2";

function Home(props){
    console.log(props)
    return(
        <div>
            <h1>Home</h1>
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/login">Login</Link>
            <Link className="link" to="/secret">Secret</Link>
            <Home2/>
        </div>
    )
}

export default Home;