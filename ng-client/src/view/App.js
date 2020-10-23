import React from 'react';
import { Signup } from './Signup/Signup';
import { Board } from './Board/Board';
import { Login } from './Login/Login';
import { Container } from 'react-bootstrap';
import {AuthProvider} from './Context/AuthContext';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const styleCont = { minHeight: '100vh' },
      styleDiv = { maxWidth: '400px' };

function App() {
  return (
    <AuthProvider>
      <Container className='d-flex align-items-center justify-content-center' style={styleCont}>
        <div className='w-100' style={styleDiv}>

          <Router>
            <AuthProvider>
              <Switch>
                {/* <Route exect path='/' component={Board} /> */}
                <Route path='/signup' component={Signup} />
                <Route path='/login' component={Login} />
              </Switch>
            </AuthProvider>
          </Router>

        </div>
      </Container>
    </AuthProvider>
  );
}

export default App;
