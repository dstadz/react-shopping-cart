import React, {useContext} from 'react';
import ProductsContext from '../contexts/ProductContext'

// Components
import Product from './Product';

const Products = props => {
	return (
		<div className="products-container">
			{props.products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={props.addItem}
				/>
			))}
		</div>
	);
};

export default Products;
