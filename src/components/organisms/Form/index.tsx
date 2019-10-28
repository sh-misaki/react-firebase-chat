import React, { Children, ReactElement, } from 'react';
import { withFormik, FormikProps, } from 'formik';
import * as Yup from 'yup';

interface FormProps {
  initialValues: { [name: string]: string };
  onSubmit(values: any): void;
}

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(8, '${min}文字以上入力してください'),
});

const Form = withFormik<FormProps, FormProps['initialValues']>({
  mapPropsToValues: ({ initialValues }) => initialValues,
  validationSchema,
  handleSubmit: (values, { props: { onSubmit } }) => onSubmit(values),
})((props: FormikProps<FormProps['initialValues']> & React.PropsWithChildren<{}>) => {
  const { touched, errors, handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      {
        Children.map(props.children as ReactElement, child => {
          const { name } = child.props;
          return React.cloneElement(child, {
            error: touched[name] && errors[name],
            errorMessage: errors[name],
          })
        })
      }
      <button type="submit">
        Submit
      </button>
    </form>
  );
});

export default Form;
