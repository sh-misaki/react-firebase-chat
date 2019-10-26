import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleTodo } from 'store/ducks/todos/actions';
import MainLayout from 'components/templates/main';
import Typography from 'components/atoms/Typography';

type Props = {

}

class Chat extends Component<Props> {
  render() {
    console.log(this.props)
    return (
      <MainLayout>
        <Typography variant="h1">
          Chat
        </Typography>
      </MainLayout>
    )
  }
}

const mapStateToProps = (state: any) => ({
  todos: state.todos
})

const mapDispatchToProps = (dispatch: any) => ({
  toggleTodo: (id: string) => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat)