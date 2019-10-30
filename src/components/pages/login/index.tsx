import React, { Component } from 'react';
import * as Yup from 'yup';
import * as firebase from "firebase/app";

import MainLayout from 'components/templates/main';
import Typography from 'components/atoms/Typography';
import TextField from 'components/atoms/TextField';
import Label from 'components/atoms/Label';
import FormControl from 'components/molecules/FormControl';
import Form from 'components/organisms/Form';

interface Props {
  signup: boolean;
}

class Login extends Component<Props> {
  private onSubmit = (values: any) => {
    firebase.auth()
    console.log('get values', values);
  }

  render() {
    const { signup } = this.props;
    const validationSchema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required()
        .label("メールアドレス"),
      password: Yup.string()
        .min(8)
        .label("パスワード"),
    })

    return (
      <MainLayout>
        <Typography variant="h1">
          { signup ? "SignUp" : "SignIn" }
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
