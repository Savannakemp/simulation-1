const express = require('express');
//body parser is our package that allows us access to req.body on requests
const bodyParser = require('body-parser');
//massive is the package we use to interact with our database
const massive = require('massive');
//because our controllers are not packages, we need to use ./routeToOurFile
const mc = require('./controllers/movieController')
// Make sure to bring dotenv in before you access process.env
require('dotenv').config()

const app = express();

app.use( bodyParser.json() ); massive( process.env.CONNECTION_STRING ).then( dbInstance => {
  app.set('db', dbInstance);
});

app.get('/api/inventory', mc.getInventory)
app.get('/api/inventory/:id', mc.getInventoryById)
app.post('/api/inventory', mc.addInventory)
app.put('/api/inventory/:id', mc.editInventoryById)
app.delete('/api/inventory/:id', mc.deleteInventoryById)


const port = process.env.PORT || 3000
app.listen(port, () => { console.log(`Server listening on port ${port}`) } );