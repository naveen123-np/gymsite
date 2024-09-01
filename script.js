
import products from '../api/products.json' with {type: "json"};
import {showContainer } from './productcard.js';
showContainer(products);
console.log(products)