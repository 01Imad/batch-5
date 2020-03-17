import React from 'react';
import PropTypes from "prop-types";

function Contacts(props) {
    const allContacts = props.data;
    return (
        <div>
            <h2>All Contact</h2>
            {allContacts.map((c, i) => {
                return <div key={i}>
                    <h1>{c.name}</h1>
                    <p>{c.email}</p>
                    <p>{c.mobile}</p>
                    <button
                        onClick={() => props.deleteContactFunc(c)}
                    >
                        Delete
                        </button>
                </div>
            })}
        </div>
    )
}

Contacts.propTypes = {
    data: PropTypes.array.isRequired,
    deleteContactFunc: PropTypes.func.isRequired,
    someProp: PropTypes.string.isRequired
}

export default Contacts