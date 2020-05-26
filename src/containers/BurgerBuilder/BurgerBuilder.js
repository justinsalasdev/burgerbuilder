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
        this.setState({loading: true})
        // alert('You continue!');
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            //dummy customer data
            customer: {
                name: 'Justin M',

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
                this.setState({loading: false, purchasing: false})
                console.log(response)
            })
            .catch(error => {
                this.setState({loading: false, purchasing: false})
                console.log(error)
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