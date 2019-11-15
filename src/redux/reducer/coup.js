const initialState = {
  items:[],
  currentID: null
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case 'GET_COUP':
      return {
        ...state,
        items: payload
      };
    case 'ADD_COUP':
      return {
        ...state,
        items: [
          ...state.items,
          payload
        ]
      };
    case 'UPP_COUP':
      return {
        ...state,
        items: state.items.filter(item => {
          if (item.id === state.currentID) {
            return  Object.assign(item, payload)
          }
          return item;
        })
      };
    case 'GET_GURRENT_ID':
      return {
        ...state,
        currentID: payload
      };
  
    default:
      return state;
  }
}