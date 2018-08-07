import React, { Component } from 'react';
import TaskListContainer from './containers/TaskListContainer';

class App extends Component {
  render() {
    return (
      <main>
        <TaskListContainer />
      </main>
    );
  }
}

export default App;
