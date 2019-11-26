import { axios } from '../core';

export default {
  getAll: id => axios.get(`svet/${id}`),
  uppSvet: (id, data) => axios.put(`svet/${id}`, data),
  addSvet: data => axios.post('svet', data),
  deleteSvet: id => axios.delete(`svet/${id}`)
};