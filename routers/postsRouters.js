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
    
// store creazione di un elemento 
router.post('/', controllers.store)

// put modifica integrale 
router.put('/:id', controllers.update)

// // modify modifica del elemento 
// router.patch('/:id', (req, res)=>{
//     res.send(`modifica dell'elemento con l'id: ${req.params.id}`)
// });

// delete eliminazione del elemento
router.delete('/:id', controllers.destroy)

// esporto le rotte 
module.exports = router