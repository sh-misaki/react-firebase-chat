import React from 'react';
import classNames from 'classnames';

import { IProps } from "./types";

const Label: React.FunctionComponent<IProps> = ({
  className = "",
  children,
  disabled = false,
  error = false,
  focused = false,
  required = false,
  text,
}) => {
  return (
    <label>
      <div className={classNames({
        className: className !== "",
      })}>
        <span className={classNames({
          'typography__text--disabled': disabled,
          'typography__text--error': error,
          'typography__text--focused': focused,
        })}>
          { text }
        </span>
        { required ? '必須' : '' }
      </div>
      { children }
    </label>
  )
};

export default Label;
