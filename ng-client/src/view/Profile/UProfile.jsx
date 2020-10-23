import React, { useRef, useState} from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../Context/AuthContext';
import { Link, useHistory } from 'react-router-dom';

export const UProfile = () => {
    const [err, setErr] = useState(''),
        [loading, setLoading] = useState(false),
        {currentUser, updateEmail, updatePass } = useAuth(),
        formMail = useRef(null),
        formPass = useRef(null),
        formPassConfirm = useRef(null),
        history = useHistory();

    const handleSubmit = ev => {
        ev.preventDefault();
        const email = formMail.current.value,
            pass = formPass.current.value,
            passConfirm = formPassConfirm.current.value,
            array = [];

        setErr("");
        setLoading(true);

        if(pass !== passConfirm) setErr('Please write password correctly'); 
        if(email !== currentUser.email ) array.push(updateEmail(email));
        if(pass !== currentUser.password ) array.push(updatePass(pass));

        Promise.all(array).then(() => history.push('/')).catch(() => {
            setErr("Failed to update account")
        }).finally(() => {
            setLoading(false)
        });
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h3 className='text-center mb-4'>Update Profile</h3>
                    {err && <Alert variant='danger'> {err} </Alert> }
                    <Form  onSubmit={handleSubmit} >
                        <Form.Group id='email'>
                            <Form.Label> Email </Form.Label>
                            <Form.Control type='email' required ref={ formMail } defaultValue={currentUser.email} />
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Label> Password</Form.Label>
                            <Form.Control type='password' ref={ formPass } placeholder='Update Password'/>
                        </Form.Group>
                        <Form.Group id='password-confirm'>
                            <Form.Label> Password confirm </Form.Label>
                            <Form.Control type='password' ref={ formPassConfirm } placeholder='Update Password' />
                        </Form.Group>
                        <Button className='w-100' disabled={loading} type='submit'> Update</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'> 
                <Link to='/'> Cancle </Link>
            </div>
        </>
    )
}