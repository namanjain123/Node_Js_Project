const express = require('express')
const jobsController = require('../controller/jobs')
const router = express.Router();

router.get('/',jobsController.findAll);
router.get('/:id',jobsController.findOne);
router.post('/',jobsController.create);
router.patch('/:id',jobsController.update);
router.delete('/:id',jobsController.delete);

module.exports = router