import React from 'react';
import { ErrorMessage } from 'formik';

interface Props {
  name: string,
}

const FormControl: React.FunctionComponent<Props> = ({
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