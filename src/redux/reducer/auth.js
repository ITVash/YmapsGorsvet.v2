const initialState = {
  items: [],
  auth: false
};

export default ( state = initialState, { type, payload } ) => {
  switch (type) {
    case 'AUTH_LOGIN':
      return {
        ...state,
        items: payload,
        auth: !state.auth
      };
  
    default:
      return state;
  }
}