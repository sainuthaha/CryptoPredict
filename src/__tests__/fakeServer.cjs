express = require('express');

ROOT = '/api/v1';
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

server = express();

server.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});

server.options('*', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
    res.sendStatus(200);
});

server.get(`${ROOT}/userScore`, async function (req, res) {
        res.status(200).send(require('./mocks/jsons/userDetails.json'));
});

server.get(`${ROOT}/btcPrice`, async function (req, res) {
    // await delay(3000);
    res.status(200).send(require('./mocks/jsons/price.json'));
});


server.listen(9000, () => {
    console.log('JSON Server is running at http://localhost:9000');
});
