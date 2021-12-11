const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
let port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use('/', routes);

app.use((err, req, res, next) => {
    res.json(err);
});

app.listen(port, () => {
    console.log(`App is listening on port http://localhost:${port}`)
})