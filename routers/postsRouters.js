const express = require('express');
const router = express.Router();

// importo i dati dei posts 
const posts = require('../data/postsData'); 

// index leggo i dati del posts
router.get('/', (req, res)=>{
    res.send(`qua trovi tutti i posts`)
});

// show leggo solo un elemento in base al suo id 
router.get('/:id', (req, res)=>{
    res.send(`il post con l'id numero: ${req.params.id}`)
});

// store creazione di un elemento 
router.post('/', (req, res)=>{
    res.send(`creazione di un nuovo post`)
});

// put modifica integrale 
router.put('/:id', (req, res)=>{
    res.send(`modifica integrale dell'elemento con l'id: ${req.params.id}`)
});

// modify modifica del elemento 
router.patch('/:id', (req, res)=>{
    res.send(`modifica dell'elemento con l'id: ${req.params.id}`)
});

// delete eliminazione del elemento
router.delete('/:id', (req, res)=>{
    res.send(`eliminazione dell'elemento con l'id: ${req.params.id}`)
});

// esporto le rotte 
module.exports = router