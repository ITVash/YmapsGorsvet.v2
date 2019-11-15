const initialState = {
  items:[],
  currentID: null
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case 'GET_OPORA':
      return {
        ...state,
        items: payload
      };
    case 'ADD_OPORA':
      return {
        ...state,
        items: [
          ...state.items,
          payload
        ]
      };
    case 'UPP_OPORA':
      return {
        ...state,
        items: state.items.filter(item => {
          if (item.id === state.currentID) {
            return  Object.assign(item, payload)
          }
          return item;
        })
      };
    case 'GET_OPORA_ID':
      return {
        ...state,
        currentID: payload
      };
  
    default:
      return state;
  }
}