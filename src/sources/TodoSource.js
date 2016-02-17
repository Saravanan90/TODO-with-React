var TodoActions = require('../actions/TodoActions');

var flag = true, todos = [];
for( var index = 0; index < 1000; index++ ){
	var obj = {};
	obj.label = index;
	flag = !flag;
	obj.completed = flag;
	todos.push( obj );
}

/*var todos = [{
	label: 'AA',
	completed: true
}, {
	label: 'BB',
	completed: false
}, {
	label: 'CC',
	completed: false
}, {
	label: 'DD',
	completed: false
}];*/

var TodoSource = {
  fetchTodos() {
    return {
      remote() {
        return new Promise(function (resolve, reject) {
          // simulate an asynchronous flow where data is fetched on
          // a remote server somewhere.
         // setTimeout(function () {

            // change this to `false` to see the error action being handled.
            if (true) {
              // resolve with some mock data
              resolve(todos);
            } else {
              reject('Things have broken');
            }
        //  }, 0);
        });
      },
      success: TodoActions.fetchTodos/*,
      error: TodoActions.locationsFailed,
      loading: TodoActions.fetchLocations*/
    }
  }
};

module.exports = TodoSource;
