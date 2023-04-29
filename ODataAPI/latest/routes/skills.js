const express = require('express')
const jobsController = require('../controller/skills')
const router = express.Router();

router.get('/skills/',jobsController.findAll);
router.get('/skills/:id',jobsController.findOne);
router.post('/skills/',jobsController.create);
router.patch('/skills/:id',jobsController.update);
router.delete('/skills/:id',jobsController.delete);

module.exports = router