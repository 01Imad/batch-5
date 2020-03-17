import React, { Component } from 'react';

class Friends extends Component {
    render() {
        const isFriend = this.props.friends.filter((fr) => {
                            return fr.isFriend === true
                        })
        const nonFriend = this.props.friends.filter((fr) => {
                            return fr.isFriend === false
                        })
        return (
            <div>
                <h2>Friends</h2>
                    {isFriend.map(fr =>{
                        return <div>
                            <h1>{fr.name}</h1>
                        </div>
                    })}
                <h2>Non-Friends</h2>
                    {nonFriend.map(fr =>{
                        return <div>
                            <h1>{fr.name}</h1>
                        </div>
                    })}
            </div>
        )
    }
}

export default Friends;