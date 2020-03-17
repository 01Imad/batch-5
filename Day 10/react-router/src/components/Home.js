import React from 'react';

const Home = (props) => {
    const onClickGoToUrl = () => {
        props.history.push("/onclick")
    }
    return(
        <div>
            <h2>Home</h2>
            <button onClick={onClickGoToUrl}>Go To On Click Page!</button>
        </div>
    )
}

export default Home;