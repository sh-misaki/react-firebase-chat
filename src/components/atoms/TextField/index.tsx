import React from 'react';
import classNames from 'classnames';
import { useField } from 'formik';

import { IProps } from "./types";

const TextField: React.FunctionComponent<IProps> = ({
  autoComplete = "default",
  className = "",
  disabled = false,
  fullWidth = false,
  inputProps = {},
  name = "",
  onBlur = () => {},
  onChange = () => {},
  onFocus = () => {},
  placeholder = "",
  required = false,
  type = "text",
}) => {
  const [field] = useField({ name });
  const {
    onChange: onChangeField,
    onBlur: onBlurField,
    ...restFieldProps
  } = field;

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    onChangeField(e);
    onChange(e);
  }

  const handleBlur: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    onBlurField(e);
    onBlur(e);
  }

  return (
    <input
      autoComplete={autoComplete}
      className={classNames({
        className: className !== "",
        'hoge': fullWidth,
      })}
      disabled={disabled}
      onBlur={handleBlur}
      onChange={handleChange}
      onFocus={onFocus}
      placeholder={placeholder}
      required={required}
      type={type}
      {...restFieldProps}
      {...inputProps}
    />
  )
};

export default TextField;
