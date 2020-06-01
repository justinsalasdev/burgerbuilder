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
            orderForm: {
                name: {
                    elementType:'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Your Name'
                    },
                    value:''
                },

                street: {
                    elementType:'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Street'
                    },
                    value:''
                },

                zipCode: {
                    elementType:'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'ZIP Code'
                    },
                    value:''
                },

                country: {
                    elementType:'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Country'
                    },
                    value:''
                },

                email: {
                    elementType:'input',
                    elementConfig: {
                        type: 'email',
                        placeholder: 'Email'
                    },
                    value:''
                },

                deliveryMethod: {
                    elementType:'select',
                    elementConfig: {
                        options:[
                            {value: 'fastest', displayValue:'Fastest'},
                            {value: 'cheapest',displayValue:'Cheapest'}
                        ]
                    },
                    value:''
                }
            },
            
            loading: false
        }
        

        this.orderHandler = this.orderHandler.bind(this);
        this.inputChangedHandler = this.inputChangedHandler.bind(this);

    }
   
    inputChangedHandler(event){

        const updatedOrderForm = {
            ...this.state.orderForm
        }

        const updatedFormElement = {
            ...updatedOrderForm[event.target.name]
        }

        updatedFormElement.value = event.target.value;
        updatedOrderForm[event.target.name] = updatedFormElement; 
        this.setState({orderForm: updatedOrderForm});

    }

    orderHandler(event){
        event.preventDefault();
        console.log(this.props)

        this.setState({loading: true})
        // alert('You continue!');
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
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

        const formElementsArray = [];
        for (let key in this.state.orderForm){
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key],
            });

        }


        let form = (
            <form>
                    {formElementsArray.map(formElement => {
                        return (
                            <Input 
                                key={formElement.id}
                                elementType={formElement.config.elementType}
                                elementConfig={formElement.config.elementConfig}
                                name={formElement.id}
                                value={formElement.config.value}
                                changed={this.inputChangedHandler}
                                />
                        )
                    })}
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