import React, { FunctionComponent } from 'react';

import styles from './index.module.scss';

type Props = React.HTMLAttributes<HTMLDivElement>;

const Typography: FunctionComponent<Props> = ({
  children
}) => {
  return (
    <div className={styles.typography}>
      { children }
    </div>
  )
}

export default Typography;
