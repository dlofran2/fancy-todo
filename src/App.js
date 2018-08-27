import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import TaskListContainer from './containers/TaskListContainer';
import FullTaskContainer from './containers/FullTaskContainer';

class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={TaskListContainer} />
          <Route exact path="/todo/:id" component={FullTaskContainer} />
        </Switch>
      </main>
    );
  }
}

export default App;
