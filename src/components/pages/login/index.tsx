import React, { Component } from 'react';

import MainLayout from 'components/templates/main';
import Typography from 'components/atoms/Typography';
import TextField from 'components/atoms/TextField';

class Login extends Component {
  render() {
    return (
      <MainLayout>
        <Typography variant="h1">
          Login
          <TextField
            name="name"
          />
          <TextField
            name="password"
            type="password"
          />
        </Typography>
      </MainLayout>
    )
  }
}

export default Login;
