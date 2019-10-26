import React, { Component } from 'react';

type Props = {

}

class Chat extends Component<Props> {
  render() {
    return (
      <div>
        <div>
          sideBar
        </div>
        <div>
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default Chat;
