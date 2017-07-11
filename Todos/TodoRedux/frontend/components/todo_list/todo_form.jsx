import React from 'react';
import uniqueId from '../../util';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'buy milk'
    };
    this.changeState = this.changeState.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  changeState() {
    return (event => this.setState({title: event.currentTarget.value}));
  }

  submitForm() {
    return (e => {
      e.preventDefault();
      const todo = {
        id: uniqueId(),
        title: this.state.title
      };
      this.props.receiveTodo(todo);
      this.state.title = '';
    });
  }

  render () {
    return (
      <div>
        <form onSubmit={this.submitForm()}>
          <label>Title: </label>
          <input onChange={this.changeState()} type="text" value={this.state.title}></input>
          <button>Create To-Do!</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
