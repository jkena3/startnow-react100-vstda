import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      priority: '',
      todos: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.viewTodo = this.viewTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleClick(e) {
    var newArr = this.state.todos.slice();
    if (this.state.description != '' && this.state.priority != 0) {
      newArr.push({
        description: this.state.description,
        priority: this.state.priority
      });
      this.setState({ todos: newArr });
    } else {
      alert('Missing Description or Priority');
      return null;
    }
  }

  viewTodo() {

  }

  addTodo(text, i) {
    e.preventDefault();
    let arr = this.state.todos.slice();
    arr[i] = text;
    this.setState({ todos: arr })
  }

  deleteTodo(i) {
    let arr = this.state.todos.slice();
    arr.splice(i, 1);
    this.setState({ todos: arr });
  }


  render() {
    return (
      <div className='container'>
        <div className='page-header'>
          <h1>Very Simple Todo App</h1>
          <p>Track all of the things</p>
        </div>

        {/*left side panel*/}
        <div className='row'>
          <div className='col-md-4'>
            <div className='card'>
              <h5 className='card-header'>ADD New Todo</h5>
              <div className='card-body'>
                <div className='form-group'>
                  <label>I want to...</label>
                  <textarea
                    id='add item'
                    className='create-todo-text form-control'
                    rows='5'
                    value={this.state.description}
                    onChange={this.handleChange}
                  />
                  <label>How much of a priority is this?</label>
                  <div>
                    <select
                      className='create-todo-priority form-control'
                      value={this.state.priority}
                      onChange={this.handleChange}
                    >
                      <option value={0} hidden>Select Priority</option>
                      <option value={1}>Low Priority</option>
                      <option value={2}>Medium Priority</option>
                      <option value={3}>High Priority</option>
                    </select>
                  </div>
                </div>
                <div className='card-footer'>
                  <button
                    name='btn'
                    type='submit'
                    className='create-todo btn btn-primary form-control'
                    onClick={this.handleClick}
                  >ADD</button>
                </div>
              </div>
            </div>
          </div>


          {/*right side*/}
          <div className='col-md-8'>
            <div className='card'>
              <h5 className='card-header'>View Todos</h5>
              <div className='card-body'>
                <ul className="list-group">
                  {/*use ternary operator to display cover or list of items*/}
                  {this.state.todos.length ? (
                    this.state.todos.map(this.eachComment)
                  ) : (
                      <li className="list-group-item list-group-item-primary font-weight-bold">
                        <span>Welcome to Very Simple Todo App!</span>
                        <br />
                        <a className="font-weight-normal">
                          Get started now by adding a new todo on the left
                    </a>
                      </li>
                    )}
                </ul>
              </div>
            </div>
          </div>

          {/*end row div*/}
        </div>
        {/*end div*/}
      </div>
    );
  }
}

export default App;
