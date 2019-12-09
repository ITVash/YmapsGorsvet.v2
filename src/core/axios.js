import axios from 'axios'

const token = window.localStorage.token;
token && (axios.defaults.headers.common['Authorization'] = `Bearer ${token}`);
//axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'https://us-central1-gorsvetserver.cloudfunctions.net/api/';
axios.defaults.headers.common['Content-Type'] = 'application/json; charset=UTF-8';
axios.defaults.headers.common['Accept'] = 'application/json';
window.axios = axios;

export default axios;