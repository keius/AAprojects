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

  update(property) {
      return e => this.setState({ [property]: e.target.value });
    }

  submitForm() {
    return (e => {
      e.preventDefault();
      const todo = {
        id: uniqueId(),
        title: this.state.title
      };
      this.props.createTodo(todo).then(
        () => this.setState({title: "", body: ""})
      );
    });
  }

  render () {
    return (
      <div>
        <form onSubmit={this.submitForm()}>
          <label>Title: </label>
          <input onChange={this.update('title')} type="text" value={this.state.title}></input>
            <label>Body: </label>
            <input onChange={this.changeState('body')} type="text" value={this.state.body}></input>
          <button>Create To-Do!</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
