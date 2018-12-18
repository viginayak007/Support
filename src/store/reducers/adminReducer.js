const initState = {
    authError: null
  }
  
  const authReducer = (state = initState, action) => {
    switch(action.type){
      case 'CREATE_USER_SUCCESS':
        console.log('signup success')
        return {
          ...state,
          createUserError: null
        }
      case 'CREATE_USER_ERROR':
        console.log('signup error')
        return {
          ...state,
          createUserError: action.err.message
        }
      case 'CREATE_GROUP_SUCCESS':
        console.log('created group sucess')
        return {
          ...state,
          createGroupError: null
        }
      case 'CREATE_GROUP_ERROR':
        console.log('create organization error')
        return {
          ...state,
          createGroupError: action.err.message
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
          getGroupError: action.err.message
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
          createOrganizationError: action.err.message
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
          getOrganizationError: action.err.message
        }
      default:
        return state
    }
  };
  
  export default authReducer;