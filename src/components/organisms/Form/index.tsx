import React, { Children } from 'react';
import { withFormik, FormikProps, Form, Field } from 'formik';
import * as Yup from 'yup';

interface MyFormProps {
  initialValues: { [name: string]: string };
}

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(8, '${min}文字以上入力してください'),
});

const MyForm = withFormik<MyFormProps, MyFormProps['initialValues']>({
  // Transform outer props into form values
  mapPropsToValues: props => {
    return props.initialValues;
  },

  validationSchema: SignupSchema,

  handleSubmit: values => {
    console.log(values);
  },
})((props: FormikProps<MyFormProps['initialValues']>) => {
  const { touched, errors, isSubmitting } = props;
  return (
    <form>
      <Field type="email" name="email" />
      {touched.email && errors.email && <div>{errors.email}</div>}

      <Field type="password" name="password" />
      {touched.password && errors.password && <div>{errors.password}</div>}

      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </form>
  );
});

export default MyForm;
