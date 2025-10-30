import axios from 'axios';

const uri = import.meta.env.vite_dev_uri
console.log(import.meta.env.vite_dev_uri, uri)
const axioInstance = axios.create({
    baseURL : import.meta.env.vite_dev_uri,
    withCredentials : true
});

export default axioInstance