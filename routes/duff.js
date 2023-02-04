const { Router } = require('express');
const pool = require('../db');

const router = Router();

router.get('/', (request, response, next) => {
    pool.query(
        'SELECT * FROM duff ORDER BY id ASC',
        (err, res) => {
            if (err) return next(err);

            response.json(res.rows);
        }
    )
});

router.post('/', (request, response, next) => {
    const { name, color, size, price, stock } = request.body;

    pool.query(
        'INSERT INTO duff(imageURL, name, color, size, price, stock) VALUES($1, $2, $3, $4, $5)',
        [name, color, size, price, stock],
        (err, res) => {
            if (err) return next(err);

            response.redirect('/duff');
        }
    )
});

router.put('/:id', (request, response, next) => { 
    const { id } = request.params;
    const { imageURL, name, color, size, price, stock } = request.body;

    const keys = ['imageURL', 'name', 'color', 'size', 'price', 'stock'];

    const fields = [];

    keys.forEach(key => {
        if (request.body[key]) fields.push(key);
    })

    fields.forEach((field, index) => {
        pool.query(`UPDATE duff SET ${field}=($1) where id=($2)`,
        [request.body[field], id],
        (err, res) => {
            if (err) return next(err);

            if(index === fields.length - 1) response.redirect('/duff');
        }
        )
    })
})

router.delete('/:id', (request, response, next) => {
    const { id } = request.params;

    pool.query(
        'DELETE FROM duff WHERE id=$1', [id], (err, res) => {
            if (err) return next(err);

            response.redirect('/duff');
        }
    )
})

module.exports = router;