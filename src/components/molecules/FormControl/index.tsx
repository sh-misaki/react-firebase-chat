import React, { Children } from 'react';
import classNames from 'classnames';
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