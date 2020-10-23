import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../Context/AuthContext';
import { Link } from 'react-router-dom'

export const RPass = () => {
    const [err, setErr] = useState(''),
        [msg, setMsg] = useState(''),
        [loading, setLoading] = useState(false),
        { resetPass  } = useAuth(),
        formMail = useRef(null);

        
    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const email = formMail.current.value;
        setMsg('Check your Inbox.')
        try {
            setErr("")
            setLoading(true)
            await resetPass(email)
        } catch {
            setErr("Failed to reset password")
        }

        setLoading(false);
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h3 className='text-center mb-4'>Reset Password</h3>
                    {err && <Alert variant='danger'> {err} </Alert> }
                    {msg && <Alert variant='danger'> {msg} </Alert> }
                    <Form onSubmit={handleSubmit} >
                        <Form.Group id='email'>
                            <Form.Label> Email </Form.Label>
                            <Form.Control type='email' required ref={ formMail } />
                        </Form.Group>
                        <Button className='w-100' disabled={loading} type='submit'> Reset Password </Button>
                        <Form>
                            <div className='w-100 text-center mt-/'> 
                                <Link to='/login'> Login </Link>
                            </div>
                        </Form>
                    </Form>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'> 
                Do you have account? <Link to='/signup'> Sign Up </Link>
            </div>
        </>
    )
}