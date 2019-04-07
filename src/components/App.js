import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import store from '../redux/createStore';
import ListPage from './ListPage';
import PersonPage from './PersonPage';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" exact component={ListPage} />
          <Route path="/person/:id" component={PersonPage} />
        </Router>
      </Provider>
    );
  }
}

export default App;
