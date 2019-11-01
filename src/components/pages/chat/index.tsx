import React, { FunctionComponent, useState } from 'react';
import classNames from 'classnames';
import * as Yup from 'yup';

import MainLayout from 'components/layouts/main';
import Typography from 'components/atoms/Typography';
import TextField from 'components/atoms/TextField';
import Form from 'components/organisms/Form';

import { IOpenChatsState } from 'store/ducks/openChats/models';

import styles from './index.module.scss';

interface IStateProps {
  conversations: IOpenChatsState['conversations'];
  title: IOpenChatsState['title'];
  members: IOpenChatsState['members'];
}

interface IDispatchProps {
  
}

type IProps = IStateProps & IDispatchProps;

const Chat: FunctionComponent<IProps> = ({
  conversations,
  title,
  members,
}) => {
  const onSubmit = (values: { post: string }) => {
    console.log(values);
  }

  const [canSubmit, setCanSubmit] = useState(false);
  const onValidate = (isValid: boolean) => {
    setCanSubmit(isValid);
  }

  const validationSchema = Yup.object().shape({
    post: Yup.string()
      .required()
  })

  return (
    <MainLayout>
      <div className={styles.chat}>
        <div className={styles.layoutMemberList}>
          <div>
            <Typography variant="subtitle1">
              ART WORKS
            </Typography>
          </div>
          <div>
            <Typography variant="subtitle1">
              DIRECT MESSAGES
            </Typography>
          </div>
        </div>
        <div className={styles.layoutConversation}>
          <Typography
            variant="h2"
            className={styles.title}
          >
            { title }
          </Typography>
          <div className={styles.members}>
            {
              members.map((member) => (
                <div className={styles.membersItem}>
                  <i className={classNames("fa", "fa-user", styles.conversationsItemIcon)} />
                </div>
              ))
            }
          </div>
          <div className={styles.conversations}>
            {
              conversations.map((conversation, i) => (
                <div
                  key={`conversation_${i}`}
                  className={styles.conversationsItem}
                >
                  <i className={classNames("fa", "fa-user", styles.conversationsItemIcon)} />
                  <div className={styles.conversationsItemDrawer}>
                    <div className={styles.conversationsItemDrawerText}>
                      { conversation.text }
                    </div>
                    <div className={styles.conversationsItemDrawerName}>
                      { conversation.userName }
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          <Form
            initialValues={{ post: "", }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            onValidate={onValidate}
          >
            <TextField
              name="post"
              placeholder="Write Something"
            />
            <input type="submit" value="Submit" disabled={!canSubmit} />
          </Form>
        </div>
      </div>
    </MainLayout>
  )
}

export default Chat;
