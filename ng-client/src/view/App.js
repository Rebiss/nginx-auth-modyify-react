import React from 'react';
import { Signup } from './Signup/Signup';
import { Container } from 'react-bootstrap';
import {AuthProvider} from './Context/AuthContext';

const styleCont = { minHeight: '100vh' },
      styleDiv = { maxWidth: '400px' };

function App() {
  return (
    <AuthProvider>
      <Container className='d-flex align-items-center justify-content-center' style={styleCont}>
        <div className='w-100' style={styleDiv}>
          <Signup />
        </div>
      </Container>
    </AuthProvider>
  );
}

export default App;
