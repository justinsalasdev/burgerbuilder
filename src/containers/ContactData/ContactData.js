import React, {Component} from 'react';
import Button from '../../components/Button/Button';
import Spinner from '../../components/Spinner/Spinner';
import Input from '../../components/Input/Input';
import classes from './ContactData.module.css';
import axios from '../../axios-orders';


class ContactData extends Component{

    constructor(props){
        super(props)
        
        console.log('constructor')

        function Orderfield(type,config,value){
                this.elementType = type;
                this.elementConfig = config;
                this.value = value;
        }

        this.state = {
            orderForm: {
                name: new Orderfield('input',{type:'text', placeholder:'Your Name'},''),
                street: new Orderfield('input',{type:'text', placeholder:'Street'},''),
                zipCode: new Orderfield('input',{type:'text', placeholder:'ZIP Code'},''),
                country: new Orderfield('input',{type:'text', placeholder:'Country'},''),
                email: new Orderfield('email',{type:'email', placeholder:'Email'},''),
                deliveryMethod:new Orderfield('select',{
                        options:[
                            {value: 'fastest', displayValue:'Fastest'},
                            {value: 'cheapest',displayValue:'Cheapest'}
                        ]
                    },'')
                
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
        this.setState({loading: true})
        const formData = {};
        for (let formElement in this.state.orderForm){
            formData[formElement] = this.state.orderForm[formElement].value;
        }
    
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: formData
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
            <form onSubmit={this.orderHandler}>
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
                    <Button type='submit' btnType="Success" clicked={this.orderHandler}>ORDER</Button>
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