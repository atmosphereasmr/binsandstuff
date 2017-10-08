const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const controller = require('./controller');
require('dotenv').config();

const app = express();

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set('db', dbInstance);
});

//use for production
// app.use(express.static(__dirname + '/build'))

app.use( bodyParser.json() );
app.use( cors() );


app.get('/api/content', controller.getContent)
app.post('/api/content', controller.addContent)
app.put('/api/content/:id', controller.editContent)


const port = process.env.PORT || 3001
app.listen( port , () => { console.log(`Server listening on port ${port}`); } );
