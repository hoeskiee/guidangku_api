const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const PORT = process.env.PORT || 5000;
const host = '0.0.0.0';

const app = express();

app.use(bodyParser.json());
app.use('/', routes);

app.use((err, req, res, next) => {
    res.json(err);
});

app.listen(PORT, () => {
    console.log(`App is listening on port http://localhost:${PORT}`)
})