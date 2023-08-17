import React, { useEffect, useState } from 'react';

function Dashboard() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            fetch('http://localhost:3000/api/user-data', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            })
                .then(response => response.json())
                .then(data => setUserData(data))
                .catch(error => console.error(error));
        }
    }, []);

    return (
        <div>
            {userData ? (
                <div>
                    <h2>Welcome to Your Dashboard, {userData.username}!</h2>
                    <p>Email: {userData.email}</p>
                    {/* Display other user data */}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Dashboard;
