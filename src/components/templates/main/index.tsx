import React, { Component } from 'react';
import styles from './index.module.scss';

type Props = {

}

class Chat extends Component<Props> {
  render() {
    return (
      <div className={styles.main}>
        <div className={styles.error}>
          sideBar
        </div>
        <div>
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default Chat;
