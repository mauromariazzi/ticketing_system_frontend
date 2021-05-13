import * as React from 'react';
import { observer, inject } from 'mobx-react';

class CreateTicket extends React.Component {

  constructor(props) {
    super(props)
    this.title = React.createRef()
    this.description = React.createRef()
    this.due_date = React.createRef()
    this.status = React.createRef()
    this.username = React.createRef()
  }

  CreateTicket = (e) => {
    // e.preventDefault();
    this.props.store.createTicket({
      title: this.title.current.value,
      description: this.description.current.value,
      status: this.status.current.value,
      due_date: this.due_date.current.value,
      username: this.username.current.value,
    });
    this.title.current.value = null;
    this.description.current.value = null;
    this.status.current.value = null;
    this.due_date.current.value = null;
    this.username.current.value = null;
  };
  render() {
    return (
      <div>
        <h1>Create a new Ticket</h1>
        <form onSubmit={this.CreateTicket}>
          <table style={{margin: "auto"}}>
            <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>User</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input required ref={this.title} id="title" type="text" placeholder="Title"/>
              </td>
              <td>
                <input required ref={this.description} id="description" type="text" placeholder="Description"/>
              </td>
              <td>
                <input required ref={this.due_date} id="due_date" type="date"/>
              </td>
              <td>
                <input required ref={this.status} id="status" type="text" placeholder="Status"/>
              </td>
              <td>
                <input required ref={this.username} id="username" type="text" placeholder="Username"/>
              </td>
              <td>
                <button type="submit">Save</button>
              </td>
            </tr>
          </tbody>
        </table>
        </form>
      </div>
    )
  }
}

export default inject("store")(observer(CreateTicket)); 