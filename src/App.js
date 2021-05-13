import './App.css';

import TicketList from './TicketList'
import {Provider} from 'mobx-react'
import store from './TicketStore'
import CreateTicket from './CreateTicket';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <CreateTicket></CreateTicket>
      <TicketList></TicketList>
    </div>
    </Provider>
  );
}

export default App;
