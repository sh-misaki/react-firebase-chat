import React, { FunctionComponent } from 'react';

import MainLayout from 'components/templates/main';
import Typography from 'components/atoms/Typography';
import { TodosState } from 'store/ducks/todos/models';

interface IStateProps {
  todos: TodosState['todos'];
  visibilityFilter: string;
}

interface IDispatchProps {
  onTodoClick(id: number): void;
  addTodo(text: string): void;
  onFilterClick(filter: string): void;
}

type IProps = IStateProps & IDispatchProps;

const Chat: FunctionComponent<IProps> = () => {
  return (
    <MainLayout>
      <Typography variant="h1">
        Chat
      </Typography>
    </MainLayout>
  )
}

export default Chat;
