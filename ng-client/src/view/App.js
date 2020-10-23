import React from 'react';
import { Signup } from './Signup/Signup';
import { Board } from './Board/Board';
import { Login } from './Login/Login';
import {CRoute} from './Route/CRoute';
import {RPass} from './ResetPassword/RPass';
import {UProfile} from './Profile/UProfile';
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
                <CRoute exect path='/' component={Board} />
                <CRoute path='/update-profile' component={UProfile} />
                <Route path='/signup' component={Signup} />
                <Route path='/login' component={Login} />
                <Route path='/forgot-password' component={RPass} />
              </Switch>
            </AuthProvider>
          </Router>

        </div>
      </Container>
    </AuthProvider>
  );
}

export default App;
