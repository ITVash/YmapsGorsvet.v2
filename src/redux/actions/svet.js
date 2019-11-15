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
  fetchUppSvet: coupData => ( dispatch, getState ) => {
    const { coup } = getState();
    const { currentID } = coup;
    console.log('data', coupData);
    svets.uppSvet(currentID, coupData)
    .then(({data}) => {
      dispatch(actions.getUppSvet(data));
    });
  }
};
export default actions;