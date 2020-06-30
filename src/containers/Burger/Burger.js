import React from 'react';
import './burger.scss';
import '../../recycle/Scrollbar/scrollbar.scss';
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient';


const burger = (props) =>{
    let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_,i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />
        })
    })
    .reduce((igArray,currentIg)=>{
        return igArray.concat(currentIg)
    },[]);

    if (transformedIngredients.length === 0){
        transformedIngredients = <p className='burger__instruction'>FEEL FREE TO ADD INGREDIENTS</p>
    }

    return(
        
        <div className='burger scrollbar'>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}


export default burger;