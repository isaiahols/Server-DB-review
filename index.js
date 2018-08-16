require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');

const con = require('./controller')

const { SERVER_PORT, CONNECTION_STRING } = process.env;
const app = express();
app.use(bodyParser.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
})

app.get('/api/something', con.getSomething);
app.post('/api/something', con.createSomething);
app.put('/api/something/:id',con.updateSomething);



app.listen(SERVER_PORT, () => {
    console.log(`we are listening on ${SERVER_PORT}`);

})
