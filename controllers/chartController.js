const {SelebShop, Seleb, Shop} = require('../models')
const sequelize = require('sequelize')

class ChartController {
    static showAll(req,res){
        SelebShop.findAll({
            group : ['ShopId'],
            attributes: ['ShopId', [sequelize.fn('COUNT', 'ShopId'), 'Count']]
        })
        .then(data=> {
            let label = []
            let dataNum = []
            for (let i = 0; i<data.length; i++){
                label.push(data[i].dataValues.ShopId)
                dataNum.push(parseInt(data[i].dataValues.Count))
            }
            // console.log(dataNum)
            res.render('chart',{label,dataNum})
            // res.send(data)
        })
        .catch(error=> {
            res.send(error)
        })
    }
}

module.exports = ChartController