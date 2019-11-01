import React, { FunctionComponent } from 'react';

import MainLayout from 'components/templates/main';
import Typography from 'components/atoms/Typography';
import { TodosState } from 'store/ducks/todos/models';

type Props = {
  todos: TodosState['todos'];
  visibilityFilter: string;
  onTodoClick(id: number): void;
  addTodo(text: string): void;
  onFilterClick(filter: string): void;
}

const Chat: FunctionComponent<Props> = () => {
  return (
    <MainLayout>
      <Typography variant="h1">
        Chat
      </Typography>
    </MainLayout>
  )
}

export default Chat;
