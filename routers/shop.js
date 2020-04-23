const express = require('express')
const router = express.Router()

const ShopController = require('../controllers/shopController')

router.get('/', ShopController.show)
router.get('/', ShopController.showSeleb)
router.get('/:shop_id/add', ShopController.addEndorsementForm)
router.post('/:shop_id/add/:seleb_id', ShopController.addEndorsement)
router.get('/:shop_id/list', ShopController.listSeleb)

module.exports = router