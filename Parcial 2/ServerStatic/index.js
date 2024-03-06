const express = require('express');
const path = require('path');
const basicAuth = require('express-basic-auth');
const app = express();

app.use(basicAuth({
    users: { 'admin': 'supersecret' }
}))

app.get("/", (req, res, next) => {
    res.send('Servidor get contestame a peticion get');
});

app.use("/Public", express.static(path.join(__dirname, 'Public')));

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});