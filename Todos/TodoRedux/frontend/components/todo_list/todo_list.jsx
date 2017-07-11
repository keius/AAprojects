import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

const TodoList = ({ todos, receiveTodo, removeTodo }) => {
  console.log(todos);
	const TodoListItems = todos.map(todo => (
		<TodoListItem key={todo.id} todo={todo} removeTodo={removeTodo}/>
	));

	return (
		<div className="list">
			<ul className='list-items'>
				{TodoListItems}
			</ul>

      <TodoForm receiveTodo={receiveTodo}/>
		</div>
	);
};

export default TodoList;
