import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB9KjbBy3MryQYOKkZDjOXiYzScBLApRFE'
});


export default instance;