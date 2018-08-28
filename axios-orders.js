import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-grizz.firebaseio.com/'
});

export default instance;