import React, { Children } from 'react';
import classNames from 'classnames';
import Typography from 'components/atoms/Typography';

interface Props {
  name: string,
  error?: boolean,
  errorMessage?: string,
}

const FormControl: React.FunctionComponent<Props> = ({
  children,
  error,
  errorMessage,
}) => {
  return (
    <div>
      { children }
      { error && (
        <Typography>
          { errorMessage }
        </Typography>
      ) }
    </div>
  )
};

export default FormControl;