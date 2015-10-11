var React = require('react');

var TodoItems = React.createClass({

  editMode: function(item){
    return(
      <form onSubmit={this.props.handleEdit}>
        <input className="input" value={this.state.item} onChange={this.handleChange}></input>
      </form>
    );
  },

  handleChange: function(e){
    this.setState({
      value: e.target.value
    });
  },

  render: function() {
    return (
      <ul className="list-group">
        {this.props.todoItems.map(function(item,i){
          var defaultClass = item.completed ? "done" : "not-done";

          return(
            <li key={i} className={defaultClass + ' list-group-item'} onDoubleClick={this.props.handleEdit.bind(null,i)}> 
              {item.isEditMode ? this.editMode(item) : item}
              <span className="pull-right"> 
                <button onClick={this.props.handleCompletion.bind(null,i)} className="btn btn-success btn-xs">
                  <i className="fa fa-check"></i>
                </button>
                <button onClick={this.props.handleDelete.bind(null,i)} className="btn btn-danger btn-xs">
                  <i className="fa fa-times"></i>
                </button>
              </span>
            </li>
          );
        },this)}
      </ul>
    );
  }

});

module.exports = TodoItems;