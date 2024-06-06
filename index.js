const express = require('express');
const app = express();
const port = 3000;

app
    .get('/', (req, res) => {
    res.send('Teste pipe')
    })
    .listen(port, () => {console.log('Server On-line')})

console.log("Sucess processs");
