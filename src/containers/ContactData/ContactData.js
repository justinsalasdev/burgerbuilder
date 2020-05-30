import React, {Component} from 'react';
import Button from '../../components/Button/Button';
import Spinner from '../../components/Spinner/Spinner';
import Input from '../../components/Input/Input';
import classes from './ContactData.module.css';
import axios from '../../axios-orders';


class ContactData extends Component{

    constructor(props){
        super(props)

        this.state = {
            name: '',
            email: '',
            address: {
                street: '',
                postalCode: ''
            },
            loading: false
        }

        this.orderHandler = this.orderHandler.bind(this);

    }

    orderHandler(event){
        event.preventDefault();
        console.log(this.props)

        this.setState({loading: true})
        // alert('You continue!');
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            //dummy customer data
            customer: {
                name: 'Rafael M',

                address: {
                    street: 'Test Street',
                    zipCode: '15145',
                    country: 'China'
                },

                email: 'test@test.com'

            }
        }

        axios.post('/orders.json',order)
            .then(response => {
                this.setState({loading: false})
                this.props.history.replace('/');
            })
            .catch(error => {
                this.setState({loading: false})
            });
    
    }
 
    render(){
        let form = (
            <form>
                    <Input inputtype="input" type='text' name="name" placeholder="Your name"/>
                    <Input inputtype="input" type='email' name="email" placeholder="Your email"/>
                    <Input inputtype="input" type='text' name="street" placeholder="Street"/>
                    <Input inputtype="input" type='text' name="postal" placeholder="Postal Code"/>
                    <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if(this.state.loading){
            form = <Spinner/>
        }

        return(
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                {form}
            </div>
        )
    }
}


export default ContactData;