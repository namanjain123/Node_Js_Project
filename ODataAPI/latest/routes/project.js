const express = require('express')
const projectController = require('../controller/project')
const router = express.Router();

router.get('/',projectController.findAll);
router.get('/:id',DepartmenyController.findOne);
router.post('/',DepartmenyController.create);
router.patch('/:id',DepartmenyController.update);
router.delete('/:id',DepartmenyController.delete);

module.exports = router