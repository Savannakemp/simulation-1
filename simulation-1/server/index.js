const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const db = require('./controllers/inventoryController');

require('dotenv').config()

const app = express();

app.use( bodyParser.json() );
massive( process.env.CONNECTION_STRING ).then( dbInstances => {
    app.set('db', dbInstance);
});

app.get('/api/inventory', db.get_inventory)
app.get('/api/product/:id', db.get_product_by_Id)
app.post('/api/inventory', db.add_inventory)
app.put('/api/inventory/:id', db.edit_inventory_by_id)
app.delete('/api/inventory/:id', db.delete_inventory_by_id)

const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});