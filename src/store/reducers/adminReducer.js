const initState = {
    authError: null
  }
  
  const authReducer = (state = initState, action) => {
    switch(action.type){
      case 'CREATE_USER_SUCCESS':
        console.log('signup success')
        return {
          ...state,
          authError: null
        }
  
      case 'CREATE_USER_ERROR':
        console.log('signup error')
        return {
          ...state,
          authError: action.err.message
        }
        case 'CREATE_GROUP_SUCCESS':
        console.log('created group sucess')
        return {
          ...state,
          authError: null
        }
  
      case 'CREATE_GROUP_ERROR':
        console.log('create group error')
        return {
          ...state,
          authError: action.err.message
        }
  
      default:
        return state
    }
  };
  
  export default authReducer;