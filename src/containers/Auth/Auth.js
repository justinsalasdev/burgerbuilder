import React, { Component} from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import classes from './Auth.module.css';
import * as actions from '../../store/actions/exports'
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import Spinner from '../Spinner/Spinner';


class Auth extends Component{

    constructor(props){
        super(props)
        
        function Orderfield(type,config,validation,value){
            
                this.touched = false;
                this.elementType = type;
                this.elementConfig = config;
                this.validation = validation;   
                this.value = value;
                
        }

        const passwordValidation = {
            required:true,
            minLength: 6,
            valid:false
        }

    
        this.state = {
            orderForm: {
                email: new Orderfield('email',{type:'email', placeholder:'Email'},{required:true,valid:false},''),
                password: new Orderfield('password',{type:'password', placeholder:'Password'},passwordValidation,'')
            },
            isSignup: false
        }
        
        this.inputChangedHandler = this.inputChangedHandler.bind(this);
        this.submitScreen = this.submitScreen.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.handleSignChange = this.handleSignChange.bind(this);

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


    submitHandler(event){
        event.preventDefault();
        this.props.onAuth(this.state.orderForm.email.value,this.state.orderForm.password.value,this.state.isSignup)
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


    handleSignChange(){
        this.setState(prevState => {
            return {isSignup: !prevState.isSignup}
        })
    }
    
 
    //------------------------------------------------------RENDER-----------------------------------------------------------
    render(){

        const formElementsArray = [];
        for (let key in this.state.orderForm){
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key],
            });

        }

        const switchButtonClasses = [classes.Auth__option, 
            this.state.isSignup? classes.Auth__option_login : classes.Auth__option_signup
        ].join(' ');


        const loginHeading = function(loading,error,isSignup){
            if(loading){
                if(isSignup){
                    return <p>Creating your account..</p>
                } else{
                    return <p>Logging you in..</p>
                }   
            }
            else if(error){
                return <p style={{color:'crimson'}}>{error.message.replace(/_/g,' ') + ' :('}</p>
            }else{
                if(isSignup){
                    return <h4>Please enter required information</h4>
                } else{
                    return <h4>Please provide login details</h4>
                }
            }
        }

        const authRedirect = function(isAuthenticated){
            if(isAuthenticated){
                return <Redirect to = '/' />
            } else {
                return null;
            }
        }

        return(
                <>
                {authRedirect(this.props.isAuthenticated)}
                <div className={classes.Auth}>

                    {loginHeading(this.props.loading,this.props.error,this.state.isSignup)}

                    <h4  
                        type='button' 
                        className={switchButtonClasses}
                        onClick={this.handleSignChange}
                        >{this.state.isSignup? 'Login instead': 'Create account'}</h4>

                        {this.props.loading? <Spinner/> : (
                            <form onSubmit={this.submitHandler}>
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
                                )})}

                            <Button 
                                type='submit' 
                                btnType="Success" 
                                clicked={this.submitHandler} 
                                disabled={!this.submitScreen()}
                            >{this.state.isSignup? 'SIGNUP' : 'LOGIN'}</Button>
                            </form>
                        )}
                   
                </div>
                </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        loading: state.authenticate.loading,
        error: state.authenticate.error,
        isAuthenticated: state.authenticate.token !== null
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAuth: (email,password,isSignup) => dispatch(actions.auth(email,password,isSignup))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Auth);