var React = require('react'),
	ReactDom = require('react-dom'),
	Todo = require('./components/TodoList.jsx');

ReactDom.render( 
	<Todo />,
	document.getElementById('todo')
);