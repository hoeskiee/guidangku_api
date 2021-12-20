const { Router } = require('express');
const pool = require('../db');

const router = Router();

router.get('/', (request, response, next) => {
    pool.query('SELECT * FROM users ORDER BY id ASC',
        (err, res) => {
            if (err) return next(err);

            response.json(res.rows);
        }
    );
});

router.post('/', (request, response, next) => {
    const { name, phone, email, password } = request.body;

    pool.query('INSERT INTO users(name, phone, email, password) VALUES($1, $2, $3, $4'),
    [ name, phone, email, password ],
    (err, res) => {
        if (err) return next(err);

        response.redirect('/users');
    }
})

module.exports = router;