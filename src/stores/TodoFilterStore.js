var alt = require('../alt'),
	TodoActions = require('../actions/TodoActions');

class TodoFilterStore	{
	constructor() {
		this.state = {
			filter: 'all'
		}
		this.bindListeners({
			updateFilter: TodoActions.UPDATE_FILTER
		});
	}
	updateFilter( filter ) {
		this.setState({
			filter: filter
		});
	}
}

module.exports = alt.createStore(TodoFilterStore, 'TodoFilterStore');