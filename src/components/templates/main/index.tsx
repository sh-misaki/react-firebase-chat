import React, { Component } from 'react';
import classNames from 'classnames';

import styles from './index.module.scss';
import sideMenu from './sideMenu.json';

type Props = {

}

class Chat extends Component<Props> {
  render() {
    return (
      <div className={styles.main}>
        <div className={styles.sideMenu}>
          {
            sideMenu.menu.map((menu) => (
              <div className={styles.sideMenuItem}>
                <i className={classNames("fa", menu.icon)} />
                <div className={styles.sideMenuItemText}>
                  {menu.text}
                </div>
              </div>
            ))
          }
        </div>
        <div className={styles.container}>
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default Chat;
