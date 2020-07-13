import React, {useEffect} from 'react';
import Burger from '../../containers/Burger/Burger';
import BuildControls from '../../containers/BuildControls/BuildControls';
import Alert from '../../recycle/Alert/Alert';
import Spinner from '../../recycle/Spinner/Spinner';
import OrderPrompt from '../OrderPrompt/OrderPrompt';
import {useSelector, useDispatch} from 'react-redux';
import useAlert from '../../hooks/useAlert';
import * as actions from '../../store/actions/exports';


const BurgerBuilder = props => {

    const dispatch = useDispatch();
    const [alertShown,showAlert] = useAlert(false);
    const addIngredient = (ingName) => dispatch(actions.addIngredient(ingName))
    const removeIngredient = (ingName) => dispatch(actions.removeIngredient(ingName))

        
    const ingredients = useSelector(state => state.buildBurger.ingredients)
    const price = useSelector(state => state.buildBurger.totalPrice.toFixed(2))
    const errorMessage = useSelector(state => state.buildBurger.errorMessage)
    const isAuthenticated = useSelector(state => state.login.idToken !== null)

    useEffect(() => {
        if(!ingredients){
            dispatch(actions.initIngredients())
        }
    // eslint-disable-next-line
    },[])

    const startOrder = () => (isAuthenticated && props.history.push('/checkout')) || showAlert(true)
    const cancelOrder = () => showAlert(false)
    const goToLogin = () => {
        props.history.push('/login');
        showAlert(false)
    }

    const disabledInfo = {...ingredients}

    for (let key in disabledInfo){
        disabledInfo[key] = (disabledInfo[key] <= 0)
    }
    
    return (
        <>
            {!alertShown? null:
            <Alert closeAlert={cancelOrder}>
                <OrderPrompt cancelOrder={cancelOrder} goToLogin={goToLogin}/>
            </Alert>}


            {(ingredients && (
                <>
                    <Burger ingredients={ingredients}/>
                    <BuildControls
                        addIngredient={addIngredient}
                        removeIngredient={removeIngredient}
                        disabled={disabledInfo}
                        price={price}
                        startOrder={startOrder}
                    />
                </>
            ))
            || (errorMessage && <p style={{color:'lightgrey'}}>{errorMessage}</p>)
            || <Spinner/> 
            }
           
        </>
    );


}



export default BurgerBuilder;