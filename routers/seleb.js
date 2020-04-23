const express = require('express')
const router = express.Router()

const SelebController = require('../controllers/selebController')


router.get('/', SelebController.show)
router.get('/add', SelebController.addForm)
router.post('/add', SelebController.add)
router.get('/:id/edit', SelebController.editForm)
router.post('/:id/edit', SelebController.edit)
router.get('/:id/delete', SelebController.delete)
router.get('/:seleb_id/collabs', SelebController.collabs)


module.exports = router