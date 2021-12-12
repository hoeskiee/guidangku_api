const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
let port = process.env.PORT || 3000;
const host = '0.0.0.0';

const app = express();

app.use(bodyParser.json());
app.use('/', routes);

app.use((err, req, res, next) => {
    res.json(err);
});

app.get('/', (req, res) => {
    res.send("hello world");
})

app.listen(process.env.PORT, '0.0.0.0', () => {
    console.log(`App is listening on port http://localhost:${port}`)
})