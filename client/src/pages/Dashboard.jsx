// src/components/Dashboard.js

import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

function Dashboard() {
    const { token } = useAuth();
    const [userData, setUserData] = useState("");

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/auth/user-data', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setUserData(data);
                    localStorage.setItem("userd", userData.userId)
                } else {
                    // Handle error
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchUserData();
    }, [token]);

    return (
        <div className='vh-100'>
            <h2 className='mt-3'>داشبورد</h2>
            {userData ? (
                <div>
                    <p>user id: {userData.userId}</p>
                    {/* Display other user data here */}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Dashboard;
