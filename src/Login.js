import React from 'react';
import Card from 'react-bootstrap/Card';
import './Login.css';
// import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';

class Login extends React.Component {
  render() {
    // const { isAuthenticated } = this.props.auth0;
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Log In</Card.Title>
          <Card.Text>
            Click Below to Log In
          </Card.Text>
          {/* TODO: add a `LoginButton` component here that will log the user in */}
          
<LoginButton/>
        </Card.Body>
      </Card>
    )
  }
}

export default Login;
