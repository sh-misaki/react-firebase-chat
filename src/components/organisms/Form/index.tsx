import React from 'react';
import { withFormik, FormikProps, } from 'formik';
import { Schema, setLocale } from 'yup';
import locale from './locale.json';

interface FormProps {
  initialValues: { [name: string]: string };
  onSubmit(values: any): void;
  validationSchema: Schema<{}>
}

setLocale(locale);

const Form = withFormik<FormProps, FormProps['initialValues']>({
  mapPropsToValues: (props: FormProps) => props.initialValues,
  validationSchema: (props: FormProps) => props.validationSchema,
  handleSubmit: (values, { props: { onSubmit } }) => onSubmit(values),
})((props: FormikProps<FormProps['initialValues']> & React.PropsWithChildren<{}>) => {
  const { children, handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      { children }
      <button type="submit">
        Submit
      </button>
    </form>
  );
});

export default Form;
