import React, {Component, Fragment} from 'react';
import Button from '../../components/Button/Button';
import Spinner from '../../components/Spinner/Spinner';
import Input from '../../components/Input/Input';
import classes from './ContactData.module.css';
import axios from '../../axios/orders';
import {connect} from 'react-redux';
import withErrorHandler from '../withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/exports';
import { Redirect } from 'react-router-dom';

class ContactData extends Component{

    constructor(props){
        super(props)
        
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
        const formData = {};
        for (let formElement in this.state.orderForm){
            formData[formElement] = this.state.orderForm[formElement].value;
        }
    
        const order = {
            ingredients: this.props.ings,
            price: this.props.price.toFixed(2),
            orderData: formData
        }

        this.props.onOrderBurger(order,this.props.token)
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

        if(this.props.loading){
            form = <Spinner/>
        }

        return(
            <Fragment>
                {this.props.purchased ? <Redirect to="/"/> : null }
                <div className={classes.ContactData}>
                    <h4>Enter your contact data</h4>
                    {form}
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ings: state.buildBurger.ingredients,
        price: state.buildBurger.totalPrice,
        loading: state.placeOrder.loading,
        purchased: state.placeOrder.purchased,
        token: state.authenticate.token
    }
}

const mapDispatchToProps = (dispatch) => {
   return {
     onOrderBurger: (orderData,token) => dispatch(actions.purchaseBurger(orderData,token))
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(ContactData, axios));