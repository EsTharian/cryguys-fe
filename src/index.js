import './index.scss';
import React, {useContext} from 'react';

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import ReactDOM from 'react-dom';
import {
  GlobalProvider,
  GlobalContext
} from './contexts';

import {
  Login,
  List,
  Auth
} from './Views';
import axios from 'axios';

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <Router>
        <Switch>
          <SecureRoute path="/list" component={List} />
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Auth} />
        </Switch>
      </Router>
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

function SecureRoute({...props}) {
  const [state] = useContext(GlobalContext)

  if (state.userData) {
    return <Route {...props} />
  } else {
    return <Route render={({ location }) => <Redirect to={{
      pathname: '/',
      state: { from: location }
    }} />} />
  }
}
