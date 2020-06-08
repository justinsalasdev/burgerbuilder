import React, {Component} from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';


state = {
    controls: {
        email: {
            elementType: 'input',
            elementConfig: {
                type:'email',
                placeholder: 'Email'
            },
            value: '',
            validation: {
                required: true,
                isEmail: true
            },
            valid: false,
            touched: false
        },
        email: {
            elementType: 'input',
            elementConfig: {
                type:'password',
                placeholder: 'Password'
            },
            value: '',
            validation: {
                required: true,
                minLength: 6,
            },
            valid: false,
            touched: false
        }
    }
}


class Auth extends Component {
    render(){
        return (
            <div>
                <form>

                </form>
            </div>
        );
    }
}


export default Auth;