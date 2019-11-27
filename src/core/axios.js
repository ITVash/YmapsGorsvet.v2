import axios from 'axios'

axios.defaults.baseURL = 'https://vashsite.000webhostapp.com/public/api/';
//axios.defaults.baseURL = 'http://api.local/api/';
//axios.defaults.withCredentials = true;
axios.defaults.headers.common['Content-Type'] = 'application/json; charset=UTF-8';
//axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';
axios.defaults.headers.common['Accept'] = 'application/json';
//axios.defaults.headers.post['Authorization'] = 'faeaf1caa98c4b00ebe6f09d81ccb2b5';
window.axios = axios;

export default axios;