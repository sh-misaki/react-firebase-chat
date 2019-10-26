import React, { Component } from 'react';

type Props = {

}

class Chat extends Component<Props> {
  render() {
    return (
      <div>
        main layout
        { this.props.children }
      </div>
    )
  }
}

export default Chat;
