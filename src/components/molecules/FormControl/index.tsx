import React from 'react';
import { ErrorMessage } from 'formik';

interface IProps {
  name: string,
}

const FormControl: React.FunctionComponent<IProps> = ({
  children,
  name,
}) => {
  return (
    <div>
      { children }
      <ErrorMessage name={name} />
    </div>
  )
};

export default FormControl;