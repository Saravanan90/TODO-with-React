var React = require('react'),
	AltContainer = require('alt/AltContainer'),
	TodoListStore = require('../stores/TodoListStore'),
	TodoFilterStore = require('../stores/TodoFilterStore'),
	TodoActions = require('../actions/TodoActions'),
	TodoForm = require('./TodoForm.jsx');

class Todo extends React.Component{
	constructor(){
		TodoListStore.fetchTodos();
	}
	addToTodo( todo ) {
		TodoActions.addTodo( todo );
	}
	render() {
		return (
			<div>
				<AltContainer stores={
					{
						todoList: TodoListStore,
						todoFilter: TodoFilterStore
					}
				}>
					<TodoListView />
				</AltContainer>
				<AltContainer actions={TodoActions}>
					<TodoForm />
				</AltContainer>
			</div>
		)
	}
}

class TodoListView extends React.Component{
	filterUpdated( e ) {
		var filter = e.target.value;
		TodoActions.updateFilter( filter );
	}
	render() {
		var todos = this.props.todoList.todos,
			filteredTodos = [],
			showOpts = this.props.todoFilter.filter;

		todos.map( function (todo, index){
			var neglectTodo = false;
			switch( showOpts ){
				case 'all': break;
				case 'marked': neglectTodo = !todo.completed; break;
				case 'unmarked': neglectTodo = todo.completed; break;
			}
			neglectTodo || filteredTodos.push( todo );
		})
		return(
			<div className="panel panel-default">
					<div className="panel-heading"><h4>My TODO</h4></div>
					<div className="panel-body">
						<span className="label label-info">Show</span>
						<label className="radio-inline"><input type="radio" value="all" checked={showOpts==='all'} onChange={this.filterUpdated} />All</label>
						<label className="radio-inline"><input type="radio" value="marked" checked={showOpts==='marked'} onChange={this.filterUpdated} />Marked</label>
						<label className="radio-inline"><input type="radio" value="unmarked" checked={showOpts==='unmarked'} onChange={this.filterUpdated} />Unmarked</label>
						<ul className="list-group">
							{
								filteredTodos.map( function (todo, index){
									return(
										<TodoItem todo={todo} key={index} />
									)
								})
							}
						</ul>
					</div>
				</div>	
		)
	}
}

class TodoItem extends React.Component{
	todoUpdated( todo ) {
		TodoActions.updateTodo( todo );
	}
	render() {
		var todo = this.props.todo;
		return(
			<li className="list-group-item">
				{todo.label}
				<input className="badge" type="checkbox" checked={todo.completed} onChange={this.todoUpdated.bind(this, todo)} />
			</li>
		)
	}
}

module.exports = Todo;