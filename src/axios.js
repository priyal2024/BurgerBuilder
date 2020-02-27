import axios from 'axios';

const instance = axios.create({
    baseURL:"https://burger-builder-cef77.firebaseio.com/"
});

export default instance;