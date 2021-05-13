import { runInAction, makeAutoObservable, observable, action } from 'mobx';
import TicketService  from './TicketService'

class TicketStore {
  
  tickets = []
  status = 'initial'

  constructor() {
    this.ticketService = new TicketService()
    makeAutoObservable(this, {
      tickets: observable,
      status: observable,
      updateTicket: action,
    })
  }

  getTickets = async () => {
    try {
      const data = await this.ticketService.get()
      runInAction(() => {
        this.tickets = data;
      });
  } catch (error) {
      runInAction(() => {
        this.status = "error";
      });
    }
  };

  createTicket = async (model) => {
    try {
      const response = await this.ticketService.post(model);
      if (response.status === 201) {
        runInAction(() => {
          this.status = "success";
        })
      } 
    } catch (error) {
      runInAction(() => {
        this.status = "error";
      });
    }

  };
  updateTicket = async (ticket) => {
    try {
      const response = await this.ticketService.put(ticket)
      if (response.status === 200) {
        runInAction(() => {
          this.status = "success";
        })
      } 
    } catch (error) {
      runInAction(() => {
        this.status = "error";
      });
    }
  };
  deleteTicket = async (id) => {
    try {
      const response = await this.ticketService.delete(id);
      if (response.status === 204) {
        runInAction(() => {
          this.status = "success";
        })
      } 
    } catch (error) {
      runInAction(() => {
        this.status = "error";
      });
    }
  }

}

let store = window.store = new TicketStore()

export default store;
