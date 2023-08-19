import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [userId, setUserId] = useState();


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
                    setUserId(data.userId);
                    localStorage.setItem("userId", data.userId)
                } else {
                    // Handle error
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchUserData();
    }, [token])


    const login = (newToken, newUserId) => {
        setToken(newToken);
        setUserId(newUserId); // Save userId in state
        localStorage.setItem('token', newToken);
        localStorage.setItem('userId', newUserId); // Save userId in localStorage
    };

    const logout = () => {
        setToken(null);
        setUserId(null); // Clear userId on logout
        localStorage.removeItem('token');
        localStorage.removeItem('userId'); // Remove userId from localStorage
    };

    const isAuthenticated = !!token;

    const authContextValue = {
        token,
        userId,
        login,
        logout,
        isAuthenticated,
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};
