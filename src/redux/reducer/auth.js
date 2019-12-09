const initialState = {
  items: [],
  auth: !!window.localStorage.token
};

export default ( state = initialState, { type, payload } ) => {
  switch (type) {
    case 'AUTH_LOGIN':
      return {
        ...state,
        items: payload,
        auth: true
      };
      case 'AUTH_LOGOUT':
        return {
          ...state,
          items: [],
          auth: payload
        };
  
    default:
      return state;
  }
}