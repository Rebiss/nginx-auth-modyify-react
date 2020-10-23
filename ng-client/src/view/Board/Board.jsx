import React, {useState} from 'react';
import {Card, Button, Alert} from 'react-bootstrap';
import { useAuth } from '../Context/AuthContext';
import {Link, useHistory} from 'react-router-dom';

export const Board = () => {
    const [err, setErr] = useState(''),
        history = useHistory(),
        { currentUser, logout } = useAuth();

    const handleLogOut = async () => {
        setErr('');
        try{
            await logout();
            history.push('/login');
        } catch {
            setErr('Failed to log out');
        }
    };

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'> Profile </h2>
                    {err && <Alert variant='danger'> {err} </Alert>}
                    {/* Email: { JSON.stringify(currentUser.email) } */}
                    <Link to='/update-profile' className='btn btn-primary w-100 mt-3'>Update Profile</Link>
                </Card.Body>

                <div className='w-100 text-center mt-2'>
                    <Button variant='link' onClick={handleLogOut}>Log Out</Button>
                </div>
            </Card>
        </>
    )
}