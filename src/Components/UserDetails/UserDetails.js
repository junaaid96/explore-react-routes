import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const user = useLoaderData();
    const {name, username, email, address, phone, website, company} = user;
    return (
        <div>
            <h1>User Details</h1>
            <h3>Name: {name}</h3>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <p>Street: {address.street}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
            <p>Company: {company.name}</p>
        </div>
    );
};

export default UserDetails;