const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

mongoose.connect('mongodb+srv://<username>:<password>@omnistack-krsol.mongodb.net/week10?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

const app = express();
const server = http.Server(app);

const routes = require('./routes');
const { setupWebsocket } = require('./websocket');


setupWebsocket(server);


app.use(cors()); // assim fica aberto para qqer tipo de conexão
// app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(routes);

server.listen(3333);
