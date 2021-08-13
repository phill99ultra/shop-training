import React from 'react';
import './price.style.scss';

const Price = ({standard, discount, bold}) => {
    const {amount: amountStandard = 100.00, currency: currencyStandard = 'USD'} = standard || {};
    const {amount: amountDiscount, currency: currencyDiscount} = discount || {};   
    return(
        <div className='price'>
            <span 
                className={`${discount ? 'old' : ''}`}
                style={
                    bold 
                    ? { fontWeight: 'bold'}
                    : {}
                }
            >
                {amountStandard} {currencyStandard}
            </span>
            {discount && <span className='current'>{amountDiscount} {currencyDiscount}</span>}
        </div>
    )
}

export default Price;