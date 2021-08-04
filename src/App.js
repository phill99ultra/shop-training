import './App.css';
import Product from './components/product/product.component';
import product from './models/Product';

function App() {  
  const products = [
    new product(1, 'Brown Brim', 'https://i.ibb.co/ZYW3VTp/brown-brim.png'),
    new product(2, 'Blue Beanie', 'https://i.ibb.co/ypkgK0X/blue-beanie.png'),
    new product(3, 'Brown Cowboy', 'https://i.ibb.co/QdJwgmp/brown-cowboy.png')
  ]
  return (
    <div className="App">      
      {
        products.map(({id, ...otherProductProps}) => (
          <Product key={id} {...otherProductProps}/>
        ))
      }
    </div>
  );
}

export default App;
