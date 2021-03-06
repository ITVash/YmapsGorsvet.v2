import { axios } from '../core';

export default {
  getAll: () => axios.get('coup'),
  uppCoup: (id, data) => axios.put(`coup/${id}`, data),
  addCoup: data => axios.post('coup', data)
};