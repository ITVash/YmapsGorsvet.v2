import { svet as svets } from '../../api';

const actions = {
  addSvet: items => ({
    type: 'ADD_SVET',
    payload: items
  }),
  getSvet: items => ({
    type: 'GET_SVET',
    payload: items
  }),
  getUppSvet: items => ({
    type: 'UPP_SVET',
    payload: items
  }),
  getSvetID: id => ({
    type: 'GET_SVET_ID',
    payload: id
  }),
  fetchSvet: id => dispatch => {
    svets.getAll(id).then(({ data }) => {
      dispatch(actions.getSvet(data));
    });
  },
  fetchUppSvet: svetData => ( dispatch, getState ) => {
    const { opora } = getState();
    const { currentID } = opora;
    console.log('data', svetData);
    svets.uppSvet(currentID, svetData)
    .then(({data}) => {
      dispatch(actions.getUppSvet(data));
    });
  }
};
export default actions;