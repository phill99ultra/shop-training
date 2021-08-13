import React from 'react';
import Price from '../price/price.component';
import Attribute from '../attribute/attribute.component';
// import Price from '../price/price.component';
import './product.style.scss';


const Product = ({name, image, price, attributes, bold}) => { 
    const {standard, discount} = price || {};          
    return(
        <div  className='product'>
            <img src={image} alt="" />
            <h2>{name}</h2>
            <Attribute attributes={attributes}/>
            <Price 
                standard={standard} 
                discount={discount}
                bold={bold}
            />
        </div>
    )
}

export default Product;