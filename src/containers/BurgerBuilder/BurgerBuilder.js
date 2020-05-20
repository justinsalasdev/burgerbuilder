import React, {Component} from 'react';
import Wrapper from '../Wrapper/Wrapper';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }

    render(){
        return (
            <Wrapper>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls/>
            </Wrapper>
        );
    }

}



export default BurgerBuilder;