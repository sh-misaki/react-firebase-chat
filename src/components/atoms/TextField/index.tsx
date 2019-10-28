import React from 'react';
import classNames from 'classnames';

interface Props {
  autoComplete?: 'on' | 'off' | 'default',
  className?: string,
  disabled?: boolean,
  fullWidth?: boolean,
  inputProps?: any,
  name: string,
  onBlur?: React.ChangeEventHandler,
  onChange?: React.ChangeEventHandler,
  onFocus?: React.FocusEventHandler,
  placeholder?: string,
  required?: boolean,
  type?: 'text' | 'password' | 'number',
  value?: string,
}

const TextField: React.FunctionComponent<Props> = ({
  autoComplete,
  className,
  disabled,
  fullWidth,
  inputProps,
  name,
  onBlur,
  onChange,
  onFocus,
  placeholder,
  required,
  type,
  value,
}) => {
  return (
    <input
      autoComplete={autoComplete}
      className={classNames({
        className: className !== "",
        'hoge': fullWidth,
      })}
      disabled={disabled}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      placeholder={placeholder}
      required={required}
      type={type}
      {...(value !== "" ? {value} : {})}
      {...inputProps}
    />
  )
};

TextField.defaultProps = {
  autoComplete: 'default',
  className: "",
  disabled: false,
  fullWidth: false,
  inputProps: {},
  name: "",
  onBlur: () => {},
  onChange: () => {},
  onFocus: () => {},
  placeholder: "",
  required: false,
  type: 'text',
  value: "",
};

export default TextField;