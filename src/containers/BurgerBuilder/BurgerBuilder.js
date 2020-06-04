import React, {Component} from 'react';
import Wrapper from '../Wrapper/Wrapper';
import Burger from '../../components/Burger/Burger';
import axios from '../../axios-orders';
import BuildControls from '../../components/BuildControls/BuildControls';
import Modal from '../../components/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import Spinner from '../../components/Spinner/Spinner';
import withErrorHandler from '../withErrorHandler/withErrorHandler';
import {connect} from 'react-redux';
import * as burgerBuilderActions from '../../store/actions/exports';


class BurgerBuilder extends Component {

    constructor(props){
        super(props)

        this.state = {
            purchasing: false,
        }

        this.purchaseHandler = this.purchaseHandler.bind(this);
        this.purchaseCancelHandler = this.purchaseCancelHandler.bind(this);
        this.purchaseContinueHandler = this.purchaseContinueHandler.bind(this);
    }
    
    componentDidMount(){
        this.props.onInitIngredients();
    }
    

    purchaseHandler(){ 
        this.setState({purchasing: true})
    }

    purchaseCancelHandler(){
        this.setState({purchasing: false})
    }

    purchaseContinueHandler(){

        this.props.history.push('/checkout')

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
                    price={this.props.price}
                />
            )
        }

        return (
            <Wrapper>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>

                {burger}
                
            </Wrapper>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings : state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded : (ingName) => dispatch(burgerBuilderActions.addIngredient(ingName)),
        onIngredientRemoved : (ingName) => dispatch(burgerBuilderActions.removeIngredient(ingName)),
        onInitIngredients : () => dispatch(burgerBuilderActions.initIngredients())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(BurgerBuilder,axios));