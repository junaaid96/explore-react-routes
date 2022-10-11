import React from 'react';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {id, name, email, address, username} = user;
    return (
        <div>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>City: {address.city}</p>
            <p>username: <Link to={`people/${id}`}>{username}</Link></p>
        </div>
    );
};

export default User;