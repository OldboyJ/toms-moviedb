import axios from 'axios';

export default axios.create({
    baseURL: 'https://tommartin-moviesapi.herokuapp.com'
})