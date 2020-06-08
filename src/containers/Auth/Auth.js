import React, {Component} from 'react';

state = {
    controls: {
        email: {
            elementType: 'input',
            elementConfig: {
                type:'text',
                placeholder: 'Your Name'
            },
            value: '',
            validation: {
                required: true
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