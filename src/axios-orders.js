import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://react-burger-builder-12ae6.firebaseio.com'
});



export default instance;