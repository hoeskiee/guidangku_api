const { Router } = require('express');
const { md5 } = require('pg/lib/utils');
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

//POST method with pgcrypt
router.post('/', (request, response, next) => {
    const { name, phone, email, password } = request.body;

    pool.query(`INSERT INTO users (name, phone, email, password) VALUES($1, $2, $3, crypt($4, gen_salt('md5')))`,
    [ name, phone, email, password ],
    (err, res) => {
        if (err) return next(err);

        response.redirect('/users');
    }
    )
});

module.exports = router;