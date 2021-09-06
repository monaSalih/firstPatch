import React from 'react';
// import axios from 'axios';,user
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks'
import Login from './Login'
import FavorateStore from './FavorateStore'
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


class App extends React.Component {
constructor (props){
  super(props)
  this.setState={
    dataBookStore:[]
  }
}

   render() {
    const {  isAuthenticated } = this.props.auth0;

    return (
      <>
        <Router>
        
          <Header/>
          <Switch>
            <Route exact path="/">
              {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
              {isAuthenticated ? <BestBooks/> : <Login />}
            </Route>
            {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
            <Route exact path="/profile">
              {isAuthenticated ? <profile /> : <Login />}
            </Route>
            <Route exact path="/favorateStore">
              
               {isAuthenticated ? <FavorateStore /> : <Login />}
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default withAuth0(App);
