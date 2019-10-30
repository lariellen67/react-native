import axios from 'axios';

const api =  axios.create({
    baseURL: 'https://7c4ccd45.ngrok.io/api'
});

export default api;