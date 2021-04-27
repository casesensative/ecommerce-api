const products = require('../products.json');

const getProduct = (req, res) => {
  for (let i = 0; i < products.length; i++) {
    if (+req.params.id === products[i].id) {
      return res.status(200).send(products[i]);
    }
  }
  return res.status(500).send('Item not in list'); 
}

module.exports = getProduct;