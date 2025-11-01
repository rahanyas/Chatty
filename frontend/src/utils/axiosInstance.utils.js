import axios from 'axios';

const uri = import.meta.env.VITE_ENV === 'dev' ? import.meta.env.VITE_DEV_URI : import.meta.env.VITE_PROD_URI

console.log(uri);


const server = axios.create({
    baseURL : import.meta.env.vite_dev_uri || uri,
    withCredentials : true
});

export default server