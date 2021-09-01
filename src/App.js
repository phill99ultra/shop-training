import React from 'react';
import { Button, Menu, MenuItem, Drawer, List, ListItem } from '@material-ui/core';
import './App.css';
// import component of the Product
import Product from './components/product/product.component';
// import product object
import ProductModel from './models/Product'; 
import Money from './models/Money';
import Attributes from './models/Attribute';
// import { useState } from 'react'; 

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
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [state, setState] = React.useState(false);

  const handleToggleDrawer = (open) => (event) => {
    setState(open)
  }

  const list = () => (
    <div onClick={handleToggleDrawer(false)}>      
      <List>
        <ListItem button>
          Lorem ipsum dolor sit amet consectetur.
        </ListItem>
      </List>
    </div>
  )

  const handleDeletNote = (id) => {
    products = products.filter(product => product.id !== id);
    console.log(id)
    console.log(products)   
  }
  return (
    <div className="App">
      <Button
        onClick={handleToggleDrawer(true)}
      >
        Open from left
      </Button>
      <Drawer
        anchor={'left'}
        open={state}
        onClose={handleToggleDrawer(false)}
      >
        {list()}
      </Drawer>
      <Button
        variant='contained'       
        onClick={handleOpenMenu}
      >
        Open Menu
      </Button>
      <Menu
        id='topMenu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          Subscribe
        </MenuItem>
        <MenuItem onClick={handleClose}>
          Favorites
        </MenuItem>
        <MenuItem onClick={handleClose}>
          Compare
        </MenuItem>
      </Menu>   
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
              handleDeletNote={handleDeletNote}  
              productId={id}               
            />         
          ))
        }
      </div>
    </div>
  );
}

export default App;
