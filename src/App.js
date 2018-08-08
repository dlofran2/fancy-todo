import React, { Component } from 'react';
// import TaskListContainer from './containers/TaskListContainer';
import FullTaskContainer from './containers/FullTaskContainer';

class App extends Component {
  render() {
    return (
      <main>
        {/* <TaskListContainer /> */}
        <FullTaskContainer />
      </main>
    );
  }
}

export default App;
