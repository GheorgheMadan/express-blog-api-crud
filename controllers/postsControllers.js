//importo i dati dei posts 
const posts = require('../data/postsData.js');

function index(req, res) {
// copiamo la logica dell'index
    res.json(posts)
}

// FUNZIONE SHOW CHE MI MOSTRA SOLO L'OGGETTO CHE CONTIENTE UN DETERMINATO ID
function show(req, res) {
    // Converto il parametro ID in un numero intero 
    const id = parseInt(req.params.id);

    // Cerco il post con l'ID corrispondente all'array
    const post = posts.find(post => post.id === id);

    // Se il post non viene trovato 
    if(!post){
        // imposto lo status 404
        res.status(404)

        // restituisco un messaggio di errore (formato json)
        return res.json({
            error: "Not Found", // Tipo di errore 
            message:"Post non trovato" // descrizione del problema
        })
    }
    res.json(post);
}

function store(req, res) {

}

function update(req, res) {

}

function destroy(req, res) {

}

// esportiamo tutto
module.exports = { index, show, store, update, destroy }