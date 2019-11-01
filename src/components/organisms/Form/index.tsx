import React, { FunctionComponent, useEffect, useRef } from 'react';
import { Formik, FormikProps, } from 'formik';
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
        <FormWithFormik
          onValidate={onValidate}
          className={className}
          {...props}
        >
          { children }
        </FormWithFormik>
      )}
    </Formik>
  );
};

export default Form;

const FormWithFormik: FunctionComponent<
  Pick<IProps, "onValidate" | "className"> &
  FormikProps<{[name: string]: string}>
> = ({
  onValidate = () => {},
  className,
  children,
  isValid,
  handleSubmit,
  resetForm,
  isSubmitting,
}) => {
  useEffect(() => onValidate(isValid), [isValid, onValidate]);

  const prevIsSubmitting = usePrevious(isSubmitting);
  useEffect(() => {
    if (prevIsSubmitting === true && isSubmitting === false) {
      resetForm();
    }
  }, [isSubmitting, prevIsSubmitting, resetForm]);

  return (
    <form
      onSubmit={handleSubmit}
      className={className}
    >
      { children }
    </form>
  );
};

function usePrevious<T>(value: T) {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
