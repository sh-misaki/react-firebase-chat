import React, { Children } from 'react';
import classNames from 'classnames';

interface Props {
  
}

const FormControl: React.FunctionComponent<Props> = ({
  children,
}) => {
  return (
    <div>
      { children }
    </div>
  )
};

FormControl.defaultProps = {
  
};

export default FormControl;