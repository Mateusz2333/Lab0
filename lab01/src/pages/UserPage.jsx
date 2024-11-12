import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function UserPage() {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(data => setUser(data));
    }, [id]);

    if (!user) return <p>Loading user data...</p>;

    return (
        <div>
            <h2>User Details</h2>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
            
        </div>
    );
}

export default UserPage;
