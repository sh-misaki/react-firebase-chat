import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import { IProps } from "./types";
import styles from './index.module.scss';

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
