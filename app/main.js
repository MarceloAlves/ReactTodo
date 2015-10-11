var React = require('react');
var TodoItems = require('./todoitems');

var Todo = React.createClass({

  getInitialState: function() {
    return {
      "todoItems": [
        {"item": "Test Item 1", "completed": false, "isEditMode": false},
        {"item": "Test Item 2", "completed": false, "isEditMode": false},
        {"item": "Test Item 3", "completed": false, "isEditMode": false},
        {"item": "Test Item 4", "completed": true, "isEditMode": false}
      ]
    };
  },

  handleSubmit: function(e){
    e.preventDefault();

    var item = {
      "item": React.findDOMNode(this.refs.todoitem).value,
      "completed": false
    };

    this.setState({
      "todoItems": this.state.todoItems.concat(item) 
    });

    React.findDOMNode(this.refs.todoitem).value = '';
  },

  handleDelete: function(e){
    var items = this.state.todoItems;

    items.splice(e,1);

    this.setState({
      todoItems: items
    });
  },

  handleCompletion: function(e){
    var items = this.state.todoItems;

    items[e].completed = true;

    this.setState({
      todoItems: items
    });

  },

  handleEdit: function(e){

    var items = this.state.todoItems;

    items[e].isEditMode = true;

    this.forceUpdate()
  },

  submitEdit: function(e){
    e.preventDefault();
  },

  render: function() {
    return (
      <div className="container">
      <h1 className="text-center">React Todo</h1>
        <div className="row">
          <div className="col-md-5 col-md-push-4">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input ref="todoitem" type="text" className="form-control" id="todoitem" placeholder="Todo Item" />
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 col-md-push-4">
            <TodoItems
              todoItems={this.state.todoItems}
              handleEdit={this.handleEdit}
              submitEdit={this.submitEdit}
              handleCompletion={this.handleCompletion}
              handleDelete={this.handleDelete} />
          </div>
        </div>
      </div>
    );
  }

});

React.render(<Todo />, document.body);