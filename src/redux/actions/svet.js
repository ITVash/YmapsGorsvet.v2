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
  delSvet: id => ({
    type: 'DELETE_SVET',
    payload: id
  }),
  fetchSvet: id => dispatch => {
    svets.getAll(id).then(({ data }) => {
      dispatch(actions.getSvet(data));
    });
  },
  fetchAddSvet: svetData => dispatch => {
    svets.addSvet(svetData)
    .then(({ data }) => {
      dispatch(actions.addSvet( data ));
    }).catch(e => console.log('errAdd', e));
  },
  deleteSvet: id => dispatch => {
    svets.deleteSvet(id)
    .then(() => dispatch(actions.delSvet(id)))
    .catch(e => console.log('errDel', e));
  },
  fetchUppSvet: svetData => ( dispatch, getState ) => {
    const { opora } = getState();
    const { currentID } = opora;
    svets.uppSvet(currentID, svetData)
    .then(({data}) => {
      dispatch(actions.getUppSvet(data));
    });
  }
};
export default actions;