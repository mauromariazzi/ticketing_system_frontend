import React from 'react'
import { observer, inject } from 'mobx-react'
import moment from 'moment'

class TicketList extends React.Component {

  constructor(props) {
    super(props)
    this.title = React.createRef()
    this.description = React.createRef()
    this.due_date = React.createRef()
    this.status = React.createRef()
    this.username = React.createRef()
  }

  componentDidMount() {
    this.props.store.getTickets();
  }

  updateProperty (index, key, value) {
    this.props.store.tickets[index][key] = value
  }

  handleChange = (e, index) => {
    this.updateProperty(index, e.target.name, e.target.value)
  };

  onUpdate(e, ticket){
    e.preventDefault();
    this.props.store.updateTicket(ticket)
  }

  onDelete(e, id) {
    e.preventDefault();
    this.props.store.deleteTicket(id)
  }

  render() {
    return (
      <div>
        <h1>List of Tickets</h1>
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
            {this.props.store.tickets.map((ticket, index) => (
              <tr key={ticket.id}>
                <td>
                  <input ref={this.title} id={"title" + index} name="title" type="text" 
                  value={ticket.title} placeholder="Title" onChange={(e) => this.handleChange(e, index)}/>
                </td>
                <td>
                  <input ref={this.description} id={"description" + index} name="description" type="text" 
                  value={ticket.description} placeholder="Description" onChange={(e) => this.handleChange(e, index)}/>
                </td>
                <td>
                  <input ref={this.due_date} id={"due_date" + index} name="due_date" type="date" 
                  value={moment(ticket.due_date).format('YYYY-MM-DD')} placeholder="Due Date" onChange={(e) => this.handleChange(e, index)}/>
                </td>
                <td>
                  <input ref={this.status} id={"status" + index} name="status" type="text" 
                  value={ticket.status} placeholder="Status" onChange={(e) => this.handleChange(e, index)}/>
                </td>
                <td>
                  <input ref={this.username} id={"username" + index} name="username" type="text" 
                  value={ticket.username} placeholder="Username" onChange={(e) => this.handleChange(e, index)}/>
                </td>
                <td>
                  <button id={"ticket_" + index} onClick={(e) => this.onUpdate(e, ticket)}> Update</button>
                </td>
                <td>
                  <button id={"ticket_" + index} onClick={(e) => this.onDelete(e, ticket.id)}> Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default inject("store")(observer(TicketList));