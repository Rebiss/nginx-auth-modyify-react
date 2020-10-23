import React, { useRef, useState} from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../Context/AuthContext';
import { Link } from 'react-router-dom';

export const Signup = () => {
    const [err, setErr] = useState(''),
          [loading, setLoading] = useState(false);
    
    const formMail = useRef(null),
          formPass = useRef(null),
          formPassConfirm = useRef(null),
          {signup} = useAuth();

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const email = formMail.current.value,
              pass = formPass.current.value,
              passConfirm = formPassConfirm.current.value;

        if(pass !== passConfirm) setErr('Please write password correctly'); 

        try {
            setErr("")
            setLoading(true)
            await signup(email, pass)
        } catch {
            setErr("Failed to create an account")
        }

        setLoading(false);
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h3 className='text-center mb-4'>Sign Up</h3>
                    {err && <Alert variant='danger'> {err} </Alert> }
                    <Form  onSubmit={handleSubmit} >
                        <Form.Group id='email'>
                            <Form.Label> Email </Form.Label>
                            <Form.Control type='email' required ref={ formMail } />
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Label> Password</Form.Label>
                            <Form.Control type='password' ref={ formPass } />
                        </Form.Group>
                        <Form.Group id='password-confirm'>
                            <Form.Label> Password confirm </Form.Label>
                            <Form.Control type='password' ref={ formPassConfirm } />
                        </Form.Group>
                        <Button className='w-100' disabled={loading} type='submit'> Sign Up </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'> 
                <Link to='/login'> Log In </Link>
            </div>
        </>
    )
}