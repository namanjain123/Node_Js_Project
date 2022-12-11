const express = require('express')
const DepartmenyController = require('../controller/Department')
const router = express.Router();

router.get('/',DepartmenyController.findAll);
router.get('/:id',DepartmenyController.findOne);
router.post('/',DepartmenyController.create);
router.patch('/:id',DepartmenyController.update);
router.delete('/:id',DepartmenyController.delete);

module.exports = router