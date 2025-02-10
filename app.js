const express = require('express');
const app = express();
const port = 3000;

// importo il MIDDLEWARE
const errorHandler = require('./Middlewares/errorHandler')

// definisco la cartella dei file statici
app.use(express.static('public'));

// autorizzo il body-parsing converto il body in qualcosa di leggibile 
app.use(express.json());

// definisco la rotta home 
app.get('/', (req, res)=>{
    res.send('Questa è la home della mia pagina')
});

// importo il file delle rotte
const postsRouters = require('./routers/postsRouters');

// definisco la rotta dei post 
app.use('/posts', postsRouters,);

// autorizzo il middleware 
app.use(errorHandler);

// definisco il port 
app.listen(port, ()=>{
    console.log(`il server è in ascolto sul port ${port}`);
});