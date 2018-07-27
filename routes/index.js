var express = require('express');
var router = express.Router();
var db = require('../queries');
require('dotenv').config();


router.get('/api/alunos', db.getAllAlunos);
router.get('/api/alunos/:id', db.getSingleAluno);
router.get('/api/infoalunos',db.getInfoAlunos);
router.get('/api/enderecos',db.getAllEndereco);
router.get('/api/bairro',db.getInfoBairro);
router.post('/api/puppies', db.createAluno);
router.post('/api/endereco',db.createEndereco);
router.put('/api/puppies/:id', db.updatePuppy);
router.delete('/api/puppies/:id', db.removePuppy);

// application -------------------------------------------------------------
router.get('/', function (req, res) {

    res.render('index', {title: 'node-postgres-promises'}); // load the single view file (angular will handle the page changes on the front-end)
});

module.exports = router;