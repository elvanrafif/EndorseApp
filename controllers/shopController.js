const {Shop} = require('../models')

class ShopController{
  static show(req,res){
    Shop.findAll()
    .then(data=> {
      res.render('shop',{data})
    })
    .catch(error=> {
      res.send(error)
    })
    
  }
}

module.exports = ShopController