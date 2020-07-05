import React, {useEffect} from 'react';
import Burger from '../../containers/Burger/Burger';
import database from '../../axios/database';
import BuildControls from '../../containers/BuildControls/BuildControls';
import Alert from '../../recycle/Alert/Alert';
// import OrderSummary from '../../containers/OrderSummary/OrderSummary';
import Spinner from '../../recycle/Spinner/Spinner';
import LoginPrompt from '../LoginPrompt/LoginPrompt';
import withErrorHandler from '../withErrorHandler/withErrorHandler';
import {useSelector, useDispatch} from 'react-redux';
import useAlert from '../../hooks/useAlert';
import * as actions from '../../store/actions/exports';


const BurgerBuilder = props => {

    const dispatch = useDispatch();
    const [alertShown,showAlert] = useAlert(false);
    const addIngredient = (ingName) => dispatch(actions.addIngredient(ingName))
    const removeIngredient = (ingName) => dispatch(actions.removeIngredient(ingName))

        
    const ings = useSelector(state => state.buildBurger.ingredients)
    const price = useSelector(state => state.buildBurger.totalPrice)
    const error = useSelector(state => state.buildBurger.error)
    const isAuthenticated = useSelector(state => state.login.token !== null)

    useEffect(() => {
        dispatch(actions.initIngredients())
    // eslint-disable-next-line
    },[])

    const startOrder = () => (isAuthenticated && props.history.push('/checkout')) || showAlert(true)
    const cancelOrder = () => showAlert(false)
    const goToLogin = () => {
        props.history.push('/login');
        showAlert(false)
    }

    const disabledInfo = {...ings}

    for (let key in disabledInfo){
        disabledInfo[key] = (disabledInfo[key] <= 0)
    }
    
    return (
        <>
            {!alertShown? null:
            <Alert closeAlert={cancelOrder}>
                <LoginPrompt cancelOrder={cancelOrder} goToLogin={goToLogin}/>
            </Alert>}

            {(ings && (
                <>
                    <Burger ingredients={ings}/>
                    <BuildControls
                        addIngredient={addIngredient}
                        removeIngredient={removeIngredient}
                        disabled={disabledInfo}
                        price={price}
                        startOrder={startOrder}
                    />
                </>
            ))
            || (error && <p>Ingredients can't be loaded :(</p>)
            || <Spinner/> 
            }
           
        </>
    );


}



export default withErrorHandler(BurgerBuilder,database);