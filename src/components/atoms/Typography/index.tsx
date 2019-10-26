import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import styles from './index.module.scss';

interface OwnProps {
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

type Props = OwnProps & React.HTMLAttributes<HTMLDivElement>;

const Typography: FunctionComponent<Props> = ({
  children,
  className,
  variant,
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

Typography.defaultProps = {
  variant: 'body1',
};

export default Typography;
