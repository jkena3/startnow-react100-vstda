import React, { Component } from 'react';
import EditTodo from './EditTodo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      priority: "",
      todos: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  deleteTodo(i) {
    let arr = this.state.todos.slice();
    arr.splice(i, 1)
    this.setState({ todos: arr })
  }
  editTodo(newText, i) {
    let arr = this.state.todos.slice();
    arr[i] = newText
    this.setState({ todos: arr })
  }
  handleClick() {
    let arr = this.state.todos.slice();
    arr.push({ text: this.state.text, priority: this.state.priority });
    this.setState({ todos: arr })
  }

  render() {
    return (
        <div className='container'>
        <h1 className="text-black">Very Simple Todo App</h1>
        <p className="text-black">Track all of the things.</p>
        <hr className="bg-red" />

        {/*left side panel*/}
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <h5 className="card-header">Add New Todo</h5>

              <div className="card-body">
                <p className="text font-weight-bold"> I want to ...</p>
                <textarea className="create-todo-text form-control" name="text" rows="5" placeholder="Enter todo items" value={this.state.text} onChange={this.handleChange}></textarea>
                <br />
                <p className="text font-weight-bold">How much of a priority is this?</p>
                <select className="create-todo-priority form-control" size='1' name="priority" value={this.state.priority} onChange={this.handleChange}>
                  <option value={0} hidden>Select a priority</option>
                  <option value={1}>Low Priorirty</option>
                  <option value={2}>Medium Priority</option>
                  <option value={3}>High Priority</option>
                </select>
              </div>

              <div className="card footer text-center">
                <button type="button" name="create-todo" className="create-todo btn btn-success btn-small" onClick={this.handleClick}>ADD</button>
              </div>
            </div>
          </div>

          {/*right side panel*/}
          <div className="col-md-8">
            <div className="card">
              <div className="card-header font-weight-bold">View Todos:</div>
              <ul className="list-group">
                {this.state.todos.length ? (
                  this.state.todos.map((details, i) =>
                    <EditTodo key={details.text + i} index={i} details={details} editUpdateTodo={this.editTodo} deleteUpdateTodo={this.deleteTodo} />)
                ) : (
                    <li className="list-group-item list-group-item-success">
                      <h3><strong>Welcome to Very Simple Todo App</strong></h3>
                      <br />
                      <span className="font-weight-normal">Get started now by adding a new todo on the left!</span>
                    </li>
                  )}
              </ul>
            </div>
          </div>
        </div>
      </div >
    )
  }
}
export default App;
