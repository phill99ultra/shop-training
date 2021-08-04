import React from 'react';



const Product = ({name, image}) => {   
    return(
        <div className='product'>
            <h2>{name}</h2>
            <img src={image} alt="" />
        </div>
    )
}

export default Product;