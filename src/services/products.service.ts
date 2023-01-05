const fetch = require('node-fetch');
import { DummyJsonProduct } from '../interfaces/DummyJSON/product.interface';
import { DummyJSONProducts } from '../interfaces/DummyJSON/products.interface';

const getProducts = async () => {
  const clothingCategories = ['womens-dresses', 'mens-shirts', 'mens-watches', 'womens-watches', 'womens-bags', 'womens-jewellery', 'sunglasses', 'tops'];
  const shoesCategories = ['mens-shoes', 'womens-shoes'];

  let products:DummyJsonProduct[] = [];

  for (let category of clothingCategories.concat(shoesCategories)) {
    const response = await fetch(`https://dummyjson.com/products/category/${category}`);
    const body:DummyJSONProducts = await response.json();

    products = products.concat(body.products);
  }

  products = products.filter(function(product) {
      // Apply business rule to show products only with stock level 10 or above
      return product.stock > 9
    }).filter(function(product) {
      // Apply business rule to show shoes with max discountPercentage of 15%
      return shoesCategories.includes(product.category) && product.discountPercentage <= 15 || !shoesCategories.includes(product.category)
    });

  return products;
};

module.exports = {
  getProducts,
};
