import React from 'react';

class TodoListItem extends React.Component {
	constructor (props) {
		super(props);
		this.state = { title: '' };
		this.triggerRemove = this.triggerRemove.bind(this);
	}

	triggerRemove (e) {
			console.log(e);
      e.preventDefault();
      this.props.removeTodo(this.props.todo);
			this.setState({ title: e.currentTarget.value });
	}

	render () {
		const { todo , removeTodo } = this.props;
    const { title } = todo;

		return (
			<div className="list-item">
				<li>
					{todo.title}
					<button onClick={this.triggerRemove}>Remove Todo</button>
				</li>
			</div>
		);
	}
}

export default TodoListItem;
