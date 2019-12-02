import axios from 'axios'

//axios.defaults.baseURL = 'https://vashsite.000webhostapp.com/public/api/';
//axios.defaults.baseURL = 'http://localhost:5000/gorsvetserver/us-central1/api/';
//axios.defaults.headers.common['AUTH-KEY'] = 'fb23aad57892fe498c65ed048ac6cb8a';
//axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'https://us-central1-gorsvetserver.cloudfunctions.net/api/';
axios.defaults.headers.common['Content-Type'] = 'application/json; charset=UTF-8';
//axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';
axios.defaults.headers.common['Accept'] = 'application/json';
window.axios = axios;

export default axios;