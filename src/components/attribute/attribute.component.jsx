/* eslint-disable array-callback-return */
import React from 'react';
import './attribute.style.scss';

const Attribute = ({attributes}) => {   
    return(       
            <div className='attributes'>
            {
                attributes && attributes.map(({name, value}, index) => (
                //const {name, value} = attribute || {};
                <div key={index} className='attribute'>
                    <span>{name}:</span>
                    <span>{value}</span>                    
                </div>
                )) 
            }
            </div>      
    )
}

export default Attribute;