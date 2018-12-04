const initState = {}
  
  const ticketReducer = (state = initState, action) => {
    switch (action.type) {
      case 'CREATE_TICKET_SUCCESS':
        console.log('create ticket success');
        return state;
      case 'CREATE_TICEKT_ERROR':
        console.log('create ticket error');
        return state;
      default:
        return state;
    }
  };
  
  export default ticketReducer;