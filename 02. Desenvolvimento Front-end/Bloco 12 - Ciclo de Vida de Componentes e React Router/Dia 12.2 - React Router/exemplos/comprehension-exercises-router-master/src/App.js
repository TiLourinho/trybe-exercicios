import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './StrictAccess';

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route path="/users/:id" render={(props) => <Users {...props} greetingsMessage="Good Morning" />} />
            <Route path="/about" component={ About } />
            <Route path="/strict-access" render={ () => (<StrictAccess user={ { username: 'joao', password: '1234' } } /> )} />
            <Route exact path="/" component={ Home } />
          </Switch>
          <div>
            <Link to="/" >Home</Link>
          </div>
          <div>
            <Link to="/about" >About</Link>
          </div>
          <div>
            <Link to="/users" >Users</Link>
          </div>
          <div>
            <Link to="/strict-access" >Strict Access</Link>
          </div>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
