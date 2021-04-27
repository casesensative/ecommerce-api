const products = require('../products.json');

module.exports.getProducts = function(req, res) {
  if (req.query.price) {
    let pricematch = products.filter(product => {
      return product.price >= parseInt(req.query.price);
    });
    return res.status(200).send(pricematch);
  }
  return res.status(200).send(products);
}



