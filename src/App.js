import React from 'react';
import { Switch, Route } from 'react-router-dom';
import login from './pages/Login';
import wallet from './pages/Wallet';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/expenses-wallet-project" component={ login } />
        <Route path="/expenses-wallet-project/carteira" component={ wallet } />
      </Switch>
    );
  }
}

export default App;
