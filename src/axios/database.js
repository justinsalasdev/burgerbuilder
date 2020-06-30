import axios from 'axios';


const database = axios.create({
    baseURL: 'https://react-burger-builder-12ae6.firebaseio.com'
});


export default database;