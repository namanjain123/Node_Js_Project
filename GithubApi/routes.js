const express = require('express');
const controllers=require('./controller');

const router = express.Router();

router.get('/user/:user', controllers.getUser)

router.get('/repo/:user/:reponame', controllers.getRepo)

router.get('/commit/:user/:reponame', controllers.getCommit)

module.exports = router;