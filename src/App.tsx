import React, { Component } from 'react';
import 'App.css';
import Chat from 'containers/chat';

type Props = {

}

class App extends Component<Props> {
  render() {
    return (
      <div>
        <Chat />
      </div>
    );
  }
}

export default App;
