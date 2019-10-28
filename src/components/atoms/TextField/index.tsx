import React, { useEffect } from 'react';
import classNames from 'classnames';
import { useField } from 'formik';
 
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
}) => {
  const [field] = useField({ name });
  const {
    onChange: onChangeField,
    onBlur: onBlurField,
    ...restFieldProps
  } = field;

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    onChangeField(e);
    onChange !== undefined && onChange(e);
  }

  const handleBlur: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    onBlurField(e);
    onBlur !== undefined && onBlur(e);
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
};

export default TextField;