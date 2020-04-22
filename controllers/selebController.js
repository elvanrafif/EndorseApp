const {Seleb} = require('../models')

class SelebController{
  static show(req,res){
    Seleb.findAll()
    .then(data=> {
      res.render('seleb',{data})
    })
    .catch(error=> {
      res.send(error)
    })
    
  }
  static addForm(req,res){
    res.render('addSeleb')
  }
  static add(req,res){
    Seleb.create({
      name : req.body.name,
      age : Number(req.body.age),
      gender : req.body.gender,
      followers : Number(req.body.followers),
      fee: Number(req.body.fee)
    })
    .then(()=> {
      res.redirect('/Seleb')
    })
    .catch(error=> {
      res.send(error)
    })

  }
  static editForm(req,res){
    Seleb.findByPk(Number(req.params.id))
    .then(data=> {
      res.render('editSeleb',{data})
    })
    .catch(error=> {
      res.send(error)
    })

  }
  static edit(req,res){
    Seleb.update({
      name : req.body.name,
      age : Number(req.body.age),
      gender : req.body.gender,
      followers : Number(req.body.followers),
      fee: Number(req.body.fee)
    },{
      where : {id : Number(req.params.id)}
    })
    .then(()=>{
      res.redirect('/Seleb')
    })
    .catch(error => {
      res.send(error)
    })
  }
  static delete(req,res){
    Seleb.destroy({
      where : {id: Number(req.params.id)}
    })
    .then(()=> {
      res.redirect('/Seleb')
    })
    .catch(error => {
      res.send(error)
    })
  }
}

module.exports = SelebController