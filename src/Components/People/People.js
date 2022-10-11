import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';

const People = () => {
    const people = useLoaderData();
    return (
        <div>
            <h1>Total Registered People Found: {people.length}</h1>
            {
                people.map(user=><User key={user.id} user={user}></User>)
            }
        </div>
    );
};

export default People;