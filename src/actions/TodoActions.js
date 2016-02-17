var alt = require('../alt');

class TodoActions {
	constructor() {
		this.generateActions(
			'addTodo',
			'fetchTodos',
			'updateTodo',
			'updateFilter',
			'submitTodo'
		);
	}
	/*******	
		Below syntax to be followed 
		if any activity other than dispatching is to be done.

	********/

	/*addTodo( todo ){
		this.dispatch( todo );
	}

	fetchTodos( todos ){
		this.dispatch( todos );
	}

	updateTodo( todo ) {
		this.dispatch( todo );
	}

	updateFilter( filter ) {
		this.dispatch( filter );
	}

	submitTodo( activity ){
		this.dispatch( activity );
	}*/
}


module.exports = alt.createActions( TodoActions );