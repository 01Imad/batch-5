import React from 'react';

export default function Repo(props) {
    // const repo = this.props.repo;
    const { repo } = props;
    return (
        <div className="repo">
            <img
                style={{ height: "150px" }}
                src={repo.owner.avatar_url}
            />
            <h4>{repo.name}</h4>
            <p>{repo.description}</p>
        </div>
    )
}