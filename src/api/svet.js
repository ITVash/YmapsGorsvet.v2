import { axios } from '../core';

export default {
  getAll: id => axios.get(`svet/${id}`),
  uppSvet: (id, data) => axios.put(`svet/${id}`, data)
};