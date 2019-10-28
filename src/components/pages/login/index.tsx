import React, { Component } from 'react';

import MainLayout from 'components/templates/main';
import Typography from 'components/atoms/Typography';
import TextField from 'components/atoms/TextField';
import Label from 'components/atoms/Label';

class Login extends Component {
  render() {
    return (
      <MainLayout>
        <Typography variant="h1">
          Login
        </Typography>
        <Label
          text="名前"
        >
          <TextField
            name="name"
          />
        </Label>
        <Label
          text="パスワード"
        >
          <TextField
            name="password"
            type="password"
          />
        </Label>
      </MainLayout>
    )
  }
}

export default Login;
