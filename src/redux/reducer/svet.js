const initialState = {
  items:[],
  currentID: null
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case 'GET_SVET':
      return {
        ...state,
        items: payload
      };
      case 'DELETE_SVET':
        return {
          ...state,
          items: state.items.filter(item => item.id !== payload)
        };
    case 'ADD_SVET':
      return {
        ...state,
        items: [
          ...state.items,
          payload
        ]
      };
    case 'UPP_SVET':
      return {
        ...state,
        items: state.items.filter(item => {
          if (item.id === state.currentID) {
            return  Object.assign(item, payload)
          }
          return item;
        })
      };
    case 'GET_SVET_ID':
      return {
        ...state,
        currentID: payload
      };
  
    default:
      return state;
  }
}