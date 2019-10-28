import React, { Component } from 'react';

import MainLayout from 'components/templates/main';
import Typography from 'components/atoms/Typography';

type Props = {

}

class Chat extends Component<Props> {
  render() {
    return (
      <MainLayout>
        <Typography variant="h1">
          Chat
        </Typography>
      </MainLayout>
    )
  }
}

export default Chat;
