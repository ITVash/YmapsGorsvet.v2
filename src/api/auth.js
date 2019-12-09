import { axios } from '../core';

export default {
  login: data => axios.post('login', data),
  signup: data => axios.post('signup', data),
  getAuth: id => axios.get(`getAuth/${ id }`)
};