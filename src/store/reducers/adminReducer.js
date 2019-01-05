const initState = {
    adminError: null
  }
  
  const authReducer = (state = initState, action) => {
    switch(action.type){
      case 'CREATE_USER_SUCCESS':
        console.log('signup success')
        return {
          ...state,
          adminError: null
        }
      case 'CREATE_USER_ERROR':
        console.log('signup error')
        return {
          ...state,
          adminError: action.err.message
        }
      case 'CREATE_GROUP_SUCCESS':
        console.log('created group sucess')
        return {
          ...state,
          adminError: null
        }
      case 'CREATE_GROUP_ERROR':
        console.log('create organization error')
        return {
          ...state,
          adminError: action.err.message
        }
        case 'GET_USERS_SUCCESS':
        console.log('get users success')
        return {
          ...state,
          users: action.users
        }
      case 'GET_USERS_ERROR':
        console.log('get users error')
        return {
          ...state,
          adminError: action.err.message
        }
      case 'GET_GROUPS_SUCCESS':
        console.log('get groups success')
        return {
          ...state,
          groups: action.groups
        }
      case 'GET_GROUPS_ERROR':
        console.log('get groups error')
        return {
          ...state,
          adminError: action.err.message
        }
      case 'CREATE_ORGANIZATION_SUCCESS':
        console.log('create organization success')
        return {
          ...state,
          organizations: action.organizations
        }
      case 'CREATE_ORGANIZATION_ERROR':
        console.log('create organization error')
        return {
          ...state,
          adminError: action.err.message
        }
      case 'GET_ORGANIZATION_SUCCESS':
        console.log(' get organization success')
        return {
          ...state,
          organizations: action.organizations
        }
      case 'GET_ORGANIZATION_ERROR':
        console.log('get organization error')
        return {
          ...state,
          adminError: action.err.message
        }
      case 'GET_RULE_SUCCESS':
        console.log(' get rule success')
        return {
          ...state,
          rules: action.rules
        }
      case 'GET_RULE_ERROR':
        console.log('get rule error')
        return {
          ...state,
          adminError: action.err.message
        }
        case 'GET_OPTIONS_SUCCESS':
        console.log(' get options success')
        return {
          ...state,
          options: action.options
        }
      case 'GET_OPTIONS_ERROR':
        console.log('get options error')
        return {
          ...state,
          adminError: action.err.message
        }
      default:
        return state
    }
  };
  
  export default authReducer;