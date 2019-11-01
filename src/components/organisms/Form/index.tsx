import React from 'react';
import { withFormik, FormikProps, } from 'formik';
import { Schema, setLocale } from 'yup';
import locale from './locale.json';

interface IProps {
  initialValues: { [name: string]: string };
  onSubmit(values: any): void;
  validationSchema: Schema<{}>;
  isInitialValid?: boolean;
}

setLocale(locale);

const Form = withFormik<IProps, IProps['initialValues']>({
  mapPropsToValues: (props: IProps) => props.initialValues,
  validationSchema: (props: IProps) => props.validationSchema,
  handleSubmit: (values, { props: { onSubmit } }) => onSubmit(values),
  isInitialValid: (props: IProps) => props.isInitialValid !== undefined ? props.isInitialValid : false,
})((props: FormikProps<IProps['initialValues']> & React.PropsWithChildren<{}>) => {
  const { children, handleSubmit, isValid } = props;

  return (
    <form onSubmit={handleSubmit}>
      { children }
      <button type="submit" disabled={!isValid}>
        Submit
      </button>
    </form>
  );
});

export default Form;
