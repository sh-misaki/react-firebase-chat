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
          <div className={styles.sideMenuUser}>
            <i className={classNames("fa", "fa-user", styles.sideMenuUserIcon)} />
            <div className={styles.sideMenuUserName}>
              Jimi Hendrix
            </div>
          </div>
          <div className={styles.sideMenuList}>
            {
              sideMenu.menu.map((menu) => (
                <div className={styles.sideMenuListItem}>
                  <i className={classNames("fa", menu.icon)} />
                  <div className={styles.sideMenuListItemText}>
                    {menu.text}
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className={styles.container}>
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default Chat;
