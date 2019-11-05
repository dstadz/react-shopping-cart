import  { useState, createContext } from 'react'
import data from '../data';

export const ProductContext = createContext({})

// export const ProductProvider = () => {

//   const [products] = useState(data);
// 	const [cart, setCart] = useState([]);

// 	const addItem = item => {
// 		// add the given item to the cart
// 		setCart([...cart, {item}])
// 	};
// }

