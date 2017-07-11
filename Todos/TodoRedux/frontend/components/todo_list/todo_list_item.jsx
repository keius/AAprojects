import React from 'react';

const TodoListItem = ({ todo, removeTodo }) => (
	<div className="list-item">
		<li>
			{todo.title}
			<button onClick={removeTodo}>Remove Todo</button>
		</li>
	</div>
);

export default TodoListItem;
