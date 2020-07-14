import './ingredient.scss'

import bacon from '../../assets/icons/bacon.svg';
import cheese from '../../assets/icons/cheese.svg';
import meat from '../../assets/icons/meat.svg';
import salad from '../../assets/icons/salad.svg';

import React from 'react';



export default props => {
    const {name, quantity} = props;

    const renderLogo = name => {
        switch(name){
            case 'salad':
                return <img src={salad} alt={`a ${name}`} aria-hidden='true'/>

            case 'bacon':
                return <img src={bacon} alt={`a ${name}`} aria-hidden='true'/>
            
            case 'meat':
                return <img src={meat} alt={`a ${name}`} aria-hidden='true'/>
            
            default: 
                return <img src={cheese} alt={`a ${name}`} aria-hidden='true'/>
        }
    }

    return (
        
       <dl className="ingredient">
            <dt className="ingredient__logo">
                {renderLogo(name)}
            </dt>
            <dd className="ingredient__quantity">{quantity}</dd>
       </dl>
    )
}