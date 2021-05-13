const ticketApiUrl = 'http://localhost:4000/tickets/'

class TicketService {
  get = async () => {
    const options = {
      method: "GET",
    }
    const request = new Request(ticketApiUrl, options);
    const response = await fetch(request);
    return response.json();
  }
  post = async (ticket) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    var options = {
      method: "POST",
      headers,
      body: JSON.stringify(ticket)
    }
    const request = new Request(ticketApiUrl, options);
    const response = await fetch(request);
    return response;
  }
  put = async (ticket) => {
    const headers = new Headers()
    headers.append("Content-Type", "application/json");
    var options = {
      method: "PUT",
      headers,
      body: JSON.stringify(ticket)
    }
    const request = new Request(ticketApiUrl + ticket.id, options);
    const response = await fetch(request);
    return response;
  }
  delete = async (id) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const options = {
      method: "DELETE",
      headers
    }
    const request = new Request(ticketApiUrl + id, options);
    const response = await fetch(request);
    return response;
  }
}

export default TicketService;