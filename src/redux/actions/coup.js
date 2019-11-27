import { coup as coups } from '../../api';

const actions = {
  addCoup: items => ({
    type: 'ADD_COUP',
    payload: items
  }),
  getCoup: items => ({
    type: 'GET_COUP',
    payload: items
  }),
  getUppCoup: items => ({
    type: 'UPP_COUP',
    payload: items
  }),
  getCurrentID: id => ({
    type: 'GET_GURRENT_ID',
    payload: id
  }),
  fetchAddCoup: coupData => dispatch => {
    coups.addCoup(coupData)
    .then(({data}) => {
      dispatch(actions.addCoup(data));
    });
  },
  fetchCoup: () => dispatch => {
    coups.getAll().then(({ data }) => {
      dispatch(actions.getCoup(data));
    });
  },
  fetchUppCoup: coupData => ( dispatch, getState ) => {
    const { coup } = getState();
    const { currentID } = coup;
    coups.uppCoup(currentID, coupData)
    .then(({data}) => {
      dispatch(actions.getUppCoup(data));
    });
  }
};
export default actions;