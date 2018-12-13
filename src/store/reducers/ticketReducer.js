
const initState = {
  tickets:[]
}
  
  const ticketReducer = (state = initState, action) => {
    switch (action.type) {
      case 'CREATE_TICKET_SUCCESS':
        console.log('create ticket success');
        return state;
      case 'CREATE_TICKET_ERROR':
        console.log('create ticket error');
        return state;
      case 'GET_TICKET_ERROR':
        console.log('error while getting ticket');
        return state;
      case 'GET_TICKET_SUCCESS':
        return {
          ...state,
          tickets: action.tickets 
        };
      default:
        return state;
    }
  };
  
  export default ticketReducer;