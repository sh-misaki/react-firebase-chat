import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import * as firebase from "firebase/app";

import Typography from 'components/atoms/Typography';

import styles from './index.module.scss';
import sideMenu from './sideMenu.json';

type Props = {

}

const Chat: FunctionComponent<Props> = ({
  children,
}) => {
  const signOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch(e) {
      console.log(e);
    }
  }

  return (
    <div className={styles.main}>
      <div className={styles.sideMenu}>
        <div className={styles.sideMenuUser}>
          <i className={classNames("fa", "fa-user", styles.sideMenuUserIcon)} />
          <Typography className={styles.sideMenuUserName}>
            Jimi Hendrix
          </Typography>
        </div>
        <div className={styles.sideMenuList}>
          {
            sideMenu.menu.map((menu, i) => (
              <div
                key={`menu_${i}`}
                className={styles.sideMenuListItem}
              >
                <i className={classNames("fa", menu.icon)} />
                <Typography className={styles.sideMenuListItemText}>
                  { menu.text }
                </Typography>
              </div>
            ))
          }
        </div>
        <button onClick={signOut}>
          SignOut
        </button>
      </div>
      <div className={styles.container}>
        { children }
      </div>
    </div>
  )
}

export default Chat;
