import React from 'react';
import Price from '../price/price.component';
import Attribute from '../attribute/attribute.component';
import NoteCard from './note-card/note-card.component';

import './product.style.scss';


const Product = ({name, image, price, description, attributes, bold, handleDeletNote, productId}) => { 
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
            <NoteCard
                title={name}
                note={description}
                handleDeletNote={handleDeletNote}
                productId={productId}
            />
        </div>
    )
}

export default Product;