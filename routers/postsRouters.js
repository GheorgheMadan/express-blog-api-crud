const express = require('express');
const router = express.Router();

// importo i dati dei posts 
const posts = require('../data/postsData'); 

// importo le funzioni dal controllers 
const controllers = require('../controllers/postsControllers.js');

// index leggo i dati del posts
router.get('/', controllers.index);

// show leggo solo un elemento in base al suo id 
router.get('/:id', controllers.show); 
    
// delete eliminazione del elemento
router.delete('/:id', controllers.destroy)

// esporto le rotte 
module.exports = router