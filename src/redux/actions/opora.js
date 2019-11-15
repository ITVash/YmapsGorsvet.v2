import { opora as oporas } from '../../api';

const actions = {
  addOpora: items => ({
    type: 'ADD_OPORA',
    payload: items
  }),
  getOpora: items => ({
    type: 'GET_OPORA',
    payload: items
  }),
  getUppOpora: items => ({
    type: 'UPP_OPORA',
    payload: items
  }),
  getOporaID: id => ({
    type: 'GET_OPORA_ID',
    payload: id
  }),
  fetchOpora: () => dispatch => {
    oporas.getAll().then(({ data }) => {
      dispatch(actions.getOpora(data));
    });
  },
  fetchUppOpora: oporaData => ( dispatch, getState ) => {
    const { opora } = getState();
    const { currentID } = opora;
    oporas.uppOpora(currentID, oporaData)
    .then(({data}) => {
      dispatch(actions.getUppOpora(data));
    });
  }
};
export default actions;