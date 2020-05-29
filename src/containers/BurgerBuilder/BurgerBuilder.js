import React, {Component} from 'react';
import Wrapper from '../Wrapper/Wrapper';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import Modal from '../../components/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/Spinner/Spinner';
import withErrorHandler from '../withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}


class BurgerBuilder extends Component {

    constructor(props){
        super(props)

        this.state = {
            ingredients:null, 
            totalPrice: 4,
            purchasing: false,
            loading: false,
            error: false
        }

        this.addIngredientHandler = this.addIngredientHandler.bind(this);
        this.removeIngredientHandler = this.removeIngredientHandler.bind(this);
        this.purchaseHandler = this.purchaseHandler.bind(this);
        this.purchaseCancelHandler = this.purchaseCancelHandler.bind(this);
        this.purchaseContinueHandler = this.purchaseContinueHandler.bind(this);
    }
    
    componentDidMount(){
        axios.get('/ingredients.json')
            .then(response => {
                this.setState({ingredients: response.data})
            })
            .catch(error => {
                this.setState({error: true})
            })
    }

    purchaseHandler(){ 
        this.setState({purchasing: true})
    }

    purchaseCancelHandler(){
        this.setState({purchasing: false})
    }

    purchaseContinueHandler(){

        const queryParams = [];

        queryParams.push(`price=${this.state.totalPrice.toFixed(2)}`)
        for(let ingredient in this.state.ingredients){
            queryParams.push(encodeURIComponent(ingredient) + 
                '=' +
                 encodeURIComponent(this.state.ingredients[ingredient]))
        }
        const queryString = queryParams.join('&');

        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        });
        
    }

    addIngredientHandler(type){
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients  = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        })
    }

    

    removeIngredientHandler(type){
        const oldCount = this.state.ingredients[type];

        if (oldCount <= 0){return}//do nothing 

        const updatedCount = oldCount - 1;
        const updatedIngredients  = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = updatedCount;

        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;

        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        })
    }






    render(){
        
        const disabledInfo = {
            ...this.state.ingredients
        }

        for (let key in disabledInfo){
            disabledInfo[key] = (disabledInfo[key] <= 0)
        }

        let orderSummary = null;

        
       


        let burger = this.state.error ? <p>Ingredients can't be loaded :(</p> : <Spinner/>

        if(this.state.ingredients){
            burger = (
                <Wrapper>
                    <Burger ingredients={this.state.ingredients}/>
                    <BuildControls
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemoved={this.removeIngredientHandler}
                        disabled={disabledInfo}
                        price={this.state.totalPrice}
                        ordered={this.purchaseHandler}
                    />
                </Wrapper>
            )

            orderSummary = (
                <OrderSummary 
                    cancelOrder={this.purchaseCancelHandler}
                    ingredients={this.state.ingredients}
                    continueOrder={this.purchaseContinueHandler}
                    price={this.state.totalPrice}
                />
            )
        }
        
        if(this.state.loading){
            orderSummary = <Spinner/>
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



export default withErrorHandler(BurgerBuilder,axios);