var alt = require('../alt'),
	TodoActions = require('../actions/TodoActions'),
	TodoSource = require('../sources/TodoSource');

class TodoListStore	{
	constructor() {
		this.todos = [];
		
		/******
			bindListeners can be replaced with bindActions
			if the same action API is used here in store.
		******/

		//this.bindActions( TodoActions );

		this.bindListeners({
			addToTodo: TodoActions.SUBMIT_TODO,
			getTodoList: TodoActions.FETCH_TODOS,
			updateTodoList: TodoActions.UPDATE_TODO
		});

		this.exportAsync(TodoSource);
	}
	addToTodo( activity ) {
		var todo = {
			label: activity,
			completed: false
		}
		this.todos.push( todo );
	}
	getTodoList( todoList ) {
		this.todos = todoList;
	}
	updateTodoList( todo ) {
		todo.completed = !todo.completed;
	}
}

module.exports = alt.createStore(TodoListStore, 'TodoListStore');