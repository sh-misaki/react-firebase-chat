import React, { Component } from 'react';

import MainLayout from 'components/templates/main';
import Typography from 'components/atoms/Typography';
import TextField from 'components/atoms/TextField';
import Label from 'components/atoms/Label';
import FormControl from 'components/molecules/FormControl';
import Form from 'components/organisms/Form';

class Login extends Component {
  render() {
    return (
      <MainLayout>
        <Typography variant="h1">
          Login
        </Typography>
        <Form>
          <FormControl>
            <Label
              text="名前"
            >
              <TextField
                name="name"
              />
            </Label>
          </FormControl>
          <FormControl>
            <Label
              text="パスワード"
            >
              <TextField
                name="password"
                type="password"
              />
            </Label>
          </FormControl>
        </Form>
      </MainLayout>
    )
  }
}

export default Login;
