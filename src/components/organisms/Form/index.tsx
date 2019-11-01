import React from 'react';
import { withFormik, FormikProps, } from 'formik';
import { Schema, setLocale } from 'yup';
import locale from './locale.json';

interface IProps {
  initialValues: { [name: string]: string };
  onSubmit(values: any): void;
  validationSchema: Schema<{}>
}

setLocale(locale);

const Form = withFormik<IProps, IProps['initialValues']>({
  mapPropsToValues: (props: IProps) => props.initialValues,
  validationSchema: (props: IProps) => props.validationSchema,
  handleSubmit: (values, { props: { onSubmit } }) => onSubmit(values),
})((props: FormikProps<IProps['initialValues']> & React.PropsWithChildren<{}>) => {
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
