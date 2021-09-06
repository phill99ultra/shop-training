import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import ShareIcon from '@material-ui/icons/Share';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Typography from '@material-ui/core/Typography';
import Price from '../price/price.component';
import Attribute from '../attribute/attribute.component';

import './product.style.scss';



const Product = ({name, image, price, description, attributes, bold, handleDeletNote, productId}) => { 
    const {standard, discount} = price || {}; 
             
    return(
        <Card  className='product'>
            <CardHeader                
                action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
                }
                title={name}
                subheader={`${(new Date()).toString().split(' ').splice(1,3).join(' ')}`}
            />           
            <CardMedia
                className='image'
                image={image}
                title={name}
            />
             <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    <Attribute attributes={attributes}/>
                    <Price 
                        standard={standard} 
                        discount={discount}
                        bold={bold}
                    />  
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <ShoppingCartIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>               
            </CardActions>                     
        </Card>
    )
}

export default Product;