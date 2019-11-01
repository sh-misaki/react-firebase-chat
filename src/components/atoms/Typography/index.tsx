import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import styles from './index.module.scss';

interface IOwnProps {
  variant?: 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'button'
    | 'overline'
    | 'srOnly'
    | 'inherit'
}

type IProps = IOwnProps & React.HTMLAttributes<HTMLDivElement>;

const Typography: FunctionComponent<IProps> = ({
  children,
  className,
  variant = "body1",
}) => {
  return (
    <div className={classNames(
      styles.typography,
      className,
      styles[`typography--${variant}`],
    )}>
      { children }
    </div>
  )
}

export default Typography;
