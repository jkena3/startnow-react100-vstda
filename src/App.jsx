import React, { Component } from 'react';

class App extends Component {
  
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  addTodo(e) {
   e.preventDefault();

  }

  removeTodo(e) {

  }

  editTodo() {
    
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
                  <textarea className='form-control input-lg' rows='5' id='add item' />
                  <label>How much of a priority is this?</label>
                  <div>
                    <select className="form-control">
                      <option></option>
                      <option></option>
                      <option></option>
                    </select>
                  </div>
                </div>
                <div className='card-footer'>
                  <button name='btn' type='submit' className='btn btn-primary form-control'>ADD</button>
                </div>
              </div>
            </div>
          </div>


          {/*right side*/}
          <div className='col-md-8'>
            <div className='card'>
              <h5 className='card-header'>View Todos</h5>
              <div className='card-body'>
                <div>
                  Welcome to the very simple todo app!
                </div>
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
