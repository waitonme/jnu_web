import React, { Component } from 'react';
import { PostContainer,HeaderContainer } from './containers';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <PostContainer />
      </div>
    );
  }
}

export default App;