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
        <Form
          initialValues={{
            email: 'hoge@email.com',
            password: 'hogehoge',
          }}
        >
          <FormControl>
            <Label
              text="メールアドレス"
            >
              <TextField
                name="email"
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
