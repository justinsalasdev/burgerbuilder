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
        function Orderfield(type,config,validation,value){

                this.touched = false;
                this.elementType = type;
                this.elementConfig = config;
                this.validation = validation;   
                this.value = value;
                
        }

        const zipCodeValidation = {
            required:true,
            minLength: 5,
            maxLength: 5,
            valid:false
        }

        const deliveryConfig = {
            options:[
                {value: 'fastest', displayValue:'Fastest'},
                {value: 'cheapest',displayValue:'Cheapest'}
            ]
        }

        this.state = {
            orderForm: {
                name: new Orderfield('input',{type:'text', placeholder:'Your Name'},{required:true,valid:false},''),
                street: new Orderfield('input',{type:'text', placeholder:'Street'},{required:true,valid:false},''),
                zipCode: new Orderfield('input',{type:'text', placeholder:'ZIP Code'}, zipCodeValidation,''),
                country: new Orderfield('input',{type:'text', placeholder:'Country'},{required:true,valid:false},''),
                email: new Orderfield('email',{type:'email', placeholder:'Email'},{required:true,valid:false},''),
                deliveryMethod:new Orderfield('select',deliveryConfig,{required:true,valid:true},'fastest')   
            },
            loading: false
        }
        

       

        this.orderHandler = this.orderHandler.bind(this);
        this.inputChangedHandler = this.inputChangedHandler.bind(this);
        this.submitScreen = this.submitScreen.bind(this);

    }
    


    inputChangedHandler(event){
        const updatedOrderForm = {
            ...this.state.orderForm
        }
        const updatedFormElement = {
            ...updatedOrderForm[event.target.name]
        }

        updatedFormElement.value = event.target.value;
        updatedFormElement.validation.valid = this.validate(updatedFormElement.value,updatedFormElement.validation)
        updatedFormElement.touched = true;
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

    validate(value,rules){

        const isValid = [
            rules.required? (value.trim() !== '') : true,
            rules.minLength? (value.length >= rules.minLength) : true,
            rules.maxLength? (value.length <= rules.maxLength) : true 
        ].reduce((accumulator,currentValue) => accumulator && currentValue)

        return isValid
    }

    submitScreen(){
        const entries = {
            ...this.state.orderForm
        }

        const validation = [
            ...Object.keys(entries)
            ].map(key => {
                return entries[key].validation.valid
            }).reduce((accumulator,currentValue) => {
                return accumulator && currentValue
            })
        
        return validation;
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
                                valid={formElement.config.validation.valid}
                                touched={formElement.config.touched}
                                />
                        )
                    })}
                    <Button type='submit' btnType="Success" clicked={this.orderHandler} disabled={!this.submitScreen()}>ORDER</Button>
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