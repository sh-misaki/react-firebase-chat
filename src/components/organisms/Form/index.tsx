import React, { FunctionComponent, useEffect } from 'react';
import { Formik, useFormik, useFormikContext, } from 'formik';
import { Schema, setLocale } from 'yup';
import locale from './locale.json';

interface IProps {
  initialValues: { [name: string]: string };
  onSubmit(values: any): void;
  onValidate?(isValid: boolean): void;
  validationSchema: Schema<{}>;
  isInitialValid?: boolean;
}

setLocale(locale);

const Form: FunctionComponent<IProps> = ({
  initialValues,
  onSubmit,
  onValidate = () => {},
  validationSchema,
  isInitialValid = false,
  children,
}) => {
  return (
    <Formik
      {...{
        initialValues,
        onSubmit,
        isInitialValid,
        validationSchema,
      }}
    >
      {props => (
        <form onSubmit={props.handleSubmit}>
          { children }
          <CheckValid
            {...{onValidate}}
          />
        </form>
      )}
    </Formik>
  );
};

export default Form;

const CheckValid: FunctionComponent<Pick<IProps, "onValidate">> = ({
  onValidate = () => {},
}) => {
  const { isValid } = useFormikContext();
  useEffect(() => onValidate(isValid), [isValid]);
  return null;
};
