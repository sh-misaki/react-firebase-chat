import React, { FunctionComponent, useEffect } from 'react';
import { Formik, useFormikContext, } from 'formik';
import { Schema, setLocale } from 'yup';
import locale from './locale.json';

interface IProps {
  initialValues: { [name: string]: string };
  onSubmit(values: any): void;
  onValidate?(isValid: boolean): void;
  validationSchema: Schema<{}>;
  isInitialValid?: boolean;
  className?: string;
}

setLocale(locale);

const Form: FunctionComponent<IProps> = ({
  initialValues,
  onSubmit,
  onValidate = () => {},
  validationSchema,
  isInitialValid = false,
  className = "",
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
        <form
          onSubmit={props.handleSubmit}
          className={className}
        >
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
  useEffect(() => onValidate(isValid), [isValid, onValidate]);
  return null;
};
