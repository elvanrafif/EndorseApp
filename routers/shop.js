const express = require('express')
const router = express.Router()

const ShopController = require('../controllers/shopController')

router.get('/', ShopController.show)

module.exports = router