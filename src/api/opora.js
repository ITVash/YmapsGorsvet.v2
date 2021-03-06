import { axios } from '../core';

export default {
  getAll: () => axios.get('opora'),
  uppOpora: (id, data) => axios.put(`opora/${id}`, data),
  addOpora: data => axios.post('opora', data)
};