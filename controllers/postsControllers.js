//importo i dati dei posts 
const posts = require('../data/postsData.js');

// FUNZIONE CHE CONTIENE UN FILTRO QUESOTO MOSTRA SOLO I POST CHE HANNO UN DETERMINATO TAG 
    function index(req, res) {
        let filteredPosts = posts
        if(req.query.tag){
           filteredPosts = posts.filter(post => post.tags.includes(req.query.tag)) 
        };
        res.json(filteredPosts);
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

// FUNZIONE DELETE che eliminerà un singolo post dalla lista 
    function destroy(req, res) {
        // Converto il parametro ID in un numero intero 
        const id = parseInt(req.params.id);

        // Cerco il post con l'ID corrispondente all'array
        const post = posts.find(post => post.id === id)

        // Se il post non viene trovato 
        if(!post){

            //imposto lo status 404
            res.status(404)

            // restituisco un messaggio di errore (formato json)
            return res.json({
                error: "Not Found", // Tipo di errore 
                message:"Post non trovato" // descrizione del problema
            })
        };

        // elimino il post 
        posts.splice(posts.indexOf(post), 1); // cancello 1 elemento
        
        
        // stampo in console l'array per confrontare il risultato 
        console.log(posts);

        // imposto lo status a 204 modifica avvenuta
        res.sendStatus(204) 
        
    };


// FUNZIONE STORE aggiunge un nuovo post
function post(req, res){
    // res.send('creazione di un nuovo post')
    // trovo l'ultimo post 
    const ultimoPost = posts[posts.length - 1];
    
    // trovo l'id dell'ultimo post
    const idUltimoPost = ultimoPost.id;

    // creo un nuovo id incrementando l'ultimo id
    const nuovoID = idUltimoPost + 1;

    // creo un nuovo post 
    const nuovoPost = {
        id: nuovoID,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    };

    // inserisco il nuovo oggetto nei posts
    posts.push(nuovoPost);

    // controllo in console il cambiamento
    console.log(posts);

    // resetto lo status corretto per il post creato 
    res.status(201);
    res.json(nuovoPost)   
};
    
// esportiamo tutto
module.exports = { index, show, destroy, post }