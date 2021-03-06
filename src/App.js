import React from 'react';
import './App.css';
// import component of the Product
import Product from './components/product/product.component';
// import product object
import ProductModel from './models/Product'; 
import Money from './models/Money';
import Attributes from './models/Attribute';

function App() {  
  let products = [
    new ProductModel(
      1, 'Brown Brim', ['https://i.ibb.co/ZYW3VTp/brown-brim.png'], 
      {
        // standard: new Money(100.00, "USD"),
        discount: new Money(50.00, "USD")
      },
      'Lorem ipsum dolor sit amet.',
      [new Attributes('color', 'brown')]
    ),
    new ProductModel(
      2, 'Blue Beanie', ['https://i.ibb.co/ypkgK0X/blue-beanie.png'],
      {
        standard: new Money(150.00, "USD"),
        // discount: new Money(125.00, "USD")
      },
      'Lorem ipsum dolor sit amet.',
      [new Attributes('color', 'blue')]
    ),
    new ProductModel(
      3, 'Brown Cowboy', ['https://i.ibb.co/QdJwgmp/brown-cowboy.png'],
      {
        standard: new Money(200.00, "USD"),
        discount: new Money(100.00, "USD")
      },
      'Lorem ipsum dolor sit amet.'
    )
  ];  
  
  return (
    <div className="App">      
      <div className='ProductsWrapper'>
        {
          products.map(({id, name, imageUrls, price, description, attributes}) => (              
            <Product  
              key={id}
              name={name}  
              image={imageUrls[Math.floor((Math.random()*imageUrls.length))]}
              price={price}   
              description={description}
              attributes={attributes}  
              bold={id === 2 ? true : false}               
              productId={id}               
            />         
          ))
        }
      </div>
    </div>
  );
}

export default App;
