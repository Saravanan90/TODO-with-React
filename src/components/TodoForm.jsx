var React = require('react'),
	AltContainer = require('alt/AltContainer'),
	TodoActions = require('../actions/TodoActions');

class TodoForm extends React.Component{
	submitTodo() {
		var activity = this.refs.activity.value;
		if( activity ){
			TodoActions.submitTodo( activity );
			this.clearField();
		}
		else
			alert("Invalid activity...");
	}
	clearField() {
		this.refs.activity.value = '';
	}
	updateState( field, e ) {
		var obj = {};
		obj[field] = e ? e.target.value : '';
		this.setState( obj );
	}
	render() {
		return(
			<div className="panel panel-default">
				<div className="panel-heading">Add to my TODO</div>
				<div className="panel-body">
					<form ref="todoform" noValidate>
					  <div className="form-group">
					    <label htmlFor="activity">Activity:</label>
					    <input type="text" className="form-control" ref="activity" required />
					  </div>
					  <button type="button" className="btn btn-default" onClick={this.submitTodo.bind(this)}>Add</button>
					</form>
				</div>
			</div>	
		)
	}
}

module.exports = TodoForm;