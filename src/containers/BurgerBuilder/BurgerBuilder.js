import React, {Component} from 'react';
import Wrapper from '../Wrapper/Wrapper';
import Burger from '../../components/Burger/Burger';
import axios from '../../axios/orders';
import BuildControls from '../../components/BuildControls/BuildControls';
import Modal from '../../components/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import Spinner from '../../components/Spinner/Spinner';
import withErrorHandler from '../withErrorHandler/withErrorHandler';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/exports';


class BurgerBuilder extends Component {

    constructor(props){
        super(props)

        this.state = {
            purchasing: false,
        }

        this.purchaseHandler = this.purchaseHandler.bind(this);
        this.purchaseCancelHandler = this.purchaseCancelHandler.bind(this);
        this.purchaseContinueHandler = this.purchaseContinueHandler.bind(this);
        this.purchaseLoginHandler = this.purchaseLoginHandler.bind(this);
    }
    
    componentDidMount(){
        this.props.onInitIngredients();
    }
    

    purchaseHandler(){ 
        this.props.onInitOrder();
    }

    purchaseCancelHandler(){
        this.props.onCanceledOrder();
    }

    purchaseContinueHandler(){
        this.props.onCanceledOrder(); //sets order status to false
        this.props.history.replace('/checkout')
    }

    purchaseLoginHandler(){
        this.props.history.replace('/auth')
    }

    render(){
        
        const disabledInfo = {
            ...this.props.ings
        }

        for (let key in disabledInfo){
            disabledInfo[key] = (disabledInfo[key] <= 0)
        }

        let orderSummary = null;

        let burger = this.props.error ? <p>Ingredients can't be loaded :(</p> : <Spinner/>

        if(this.props.ings){
            burger = (
                <Wrapper>
                    <Burger ingredients={this.props.ings}/>
                    <BuildControls
                        ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.props.onIngredientRemoved}
                        disabled={disabledInfo}
                        price={this.props.price}
                        ordered={this.purchaseHandler}
                    />
                </Wrapper>
            )

            orderSummary = (
                <OrderSummary 
                    cancelOrder={this.purchaseCancelHandler}
                    ingredients={this.props.ings}
                    continueOrder={this.purchaseContinueHandler}
                    loginHandler={this.purchaseLoginHandler}
                    price={this.props.price}
                    isAuthenticated={this.props.isAuthenticated}
                />
            )
        }

        return (
            <Wrapper>
                <Modal show={this.props.ordered} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>

                {burger}
                
            </Wrapper>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings : state.buildBurger.ingredients,
        price: state.buildBurger.totalPrice,
        ordered: state.placeOrder.ordered,
        error: state.buildBurger.error,
        isAuthenticated: state.authenticate.token !== null
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onInitIngredients : () => dispatch(actions.initIngredients()),
        onIngredientAdded : (ingName) => dispatch(actions.addIngredient(ingName)),
        onIngredientRemoved : (ingName) => dispatch(actions.removeIngredient(ingName)),
        onInitOrder: () => dispatch(actions.initOrder()),
        onCanceledOrder: () => dispatch(actions.canceledOrder())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(BurgerBuilder,axios));