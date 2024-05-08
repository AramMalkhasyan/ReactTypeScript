import React, { useState } from 'react';
import { IProduct } from '../models';

interface ProductProps {
    product: IProduct
}

const Products = (props: ProductProps) => {
    const [details, setDetails] = useState(false);
    function changingState() {
        setDetails(!details)
        console.log(details);
    }
    const btnClassname = details ? 'hide_button' : 'show_more_button';
    const ratingStyle = {
        fontWeight: 'bold'
    }

    return (
        <div className='list_item'>
            <img src={props.product.image} alt="oops" className='product_image'/>
            <p>{props.product.title}</p>
            <p className='item_price'>${props.product.price}</p>
            <button 
            className={btnClassname}
            onClick={changingState}
            >{details ? 'Hide Details' : 'Show Details'}</button>
           {details && <div className='item_description'>
                {props.product.description}
                <p style={ratingStyle}>{"rating" + " " + props.product?.rating?.rate}</p>
            </div>}
        </div>
    );
}

export default Products;
