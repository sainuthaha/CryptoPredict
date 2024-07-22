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

server.put(`${ROOT}/userScore`, async function (req, res) {
    // Add your logic here to update the user's score  

    res.status(200).send({
        status: 'Success',
        details: 'Users score updated',
    });
});  

server.get(`${ROOT}/currentBtcPrice`, async function (req, res) {
    // await delay(3000);
    test = Math.random();
    res.status(200).send({ "currentPrice": test } );
    //res.status(200).send(require('./mocks/jsons/price.json'));
});

server.get(`${ROOT}/btcPrice/:timestamp`, async function (req, res) {
    // await delay(3000);
    res.status(200).send(require('./mocks/jsons/range.json'));
});

server.listen(9000, () => {
    console.log('JSON Server is running at http://localhost:9000');
});
