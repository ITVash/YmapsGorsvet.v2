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
  
    default:
      return state;
  }
}