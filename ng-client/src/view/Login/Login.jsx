import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../Context/AuthContext';
import { Link } from 'react-router-dom'

export const Login = () => {
    const [err, setErr] = useState('');
    const [loading, setLoading] = useState(false);
    
    const formMail = useRef(null),
        formPass = useRef(null);
    const { login  } = useAuth();

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const email = formMail.current.value;
        const pass = formPass.current.value;

        try {
            setErr("")
            setLoading(true)
            await login(email, pass)
        } catch {
            setErr("Failed to login")
        }

        setLoading(false);
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h3 className='text-center mb-4'>Login</h3>
                    {err && <Alert variant='danger'> {err} </Alert> }
                    <Form onSubmit={handleSubmit} >
                        <Form.Group id='email'>
                            <Form.Label> Email </Form.Label>
                            <Form.Control type='email' required ref={ formMail } />
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Label> Password</Form.Label>
                            <Form.Control type='password' ref={ formPass } />
                        </Form.Group>
                        <Button className='w-100' disabled={loading} typr='submit'> Login</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'> 
                Do you have account? <Link to='/signup'> Sign Up </Link>
            </div>
        </>
    )
}