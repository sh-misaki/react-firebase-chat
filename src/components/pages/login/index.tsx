import React, { Component } from 'react';

import MainLayout from 'components/templates/main';
import Typography from 'components/atoms/Typography';

class Login extends Component {
  render() {
    return (
      <MainLayout>
        <Typography variant="h1">
          Login
        </Typography>
      </MainLayout>
    )
  }
}

export default Login;
