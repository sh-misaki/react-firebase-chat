export interface IProps {
  autoComplete?: 'on' | 'off' | 'default',
  className?: string,
  disabled?: boolean,
  fullWidth?: boolean,
  inputProps?: any,
  name: string,
  onBlur?: (e: React.ChangeEvent) => {},
  onChange?: (e: React.ChangeEvent) => {},
  onFocus?: (e: React.FocusEvent) => {},
  placeholder?: string,
  required?: boolean,
  type?: 'text' | 'password' | 'number',
}
