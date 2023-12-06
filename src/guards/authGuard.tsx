// // navigate to login page if no jwt token is present

// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const AuthGuard = () => {
//     const navigate = useNavigate();

//     useEffect(() => {
//         const token = localStorage.getItem('token');
//         if (!token) {
//             navigate('/login');
//         }
//     }, []);

//     return null;
// };

// export default AuthGuard;

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


interface AuthGuardProps {
    component: React.ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ component }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        }
    }, []);

    return <React.Fragment>{component}</React.Fragment>;
};

export default AuthGuard;
