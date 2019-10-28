import React, { Component } from 'react';
import * as Yup from 'yup';

import MainLayout from 'components/templates/main';
import Typography from 'components/atoms/Typography';
import TextField from 'components/atoms/TextField';
import Label from 'components/atoms/Label';
import FormControl from 'components/molecules/FormControl';
import Form from 'components/organisms/Form';

class Login extends Component {
  private onSubmit = (values: any) => {
    console.log('get values', values);
  }

  render() {
    const validationSchema = Yup.object().shape({
      email: Yup.string()
        .email('Invalid email')
        .required('Required'),
      password: Yup.string()
        .min(8, '${min}文字以上入力してください'),
    })

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
          validationSchema={validationSchema}
          onSubmit={this.onSubmit}
        >
          <FormControl name="email">
            <Label text="メールアドレス">
              <TextField
                name="email"
              />
            </Label>
          </FormControl>
          <FormControl name="password">
            <Label text="パスワード">
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
