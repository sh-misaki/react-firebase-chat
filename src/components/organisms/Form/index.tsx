import React, { Children } from 'react';
import classNames from 'classnames';

interface Props {
  
}

const Form: React.FunctionComponent<Props> = ({
  children,
}) => {
  return (
    <form>
      { children }
    </form>
  )
};

Form.defaultProps = {
  
};

export default Form;