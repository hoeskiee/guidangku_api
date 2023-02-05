const { Router } = require('express');
const pool = require('../db');

const router = Router();

router.get('/', (request, response, next) => {
    pool.query(
        'SELECT * FROM lubrene ORDER BY id ASC',
        (err, res) => {
            if (err) return next(err);

            response.json(res.rows);
        }
    )
});

router.post('/', (request, response, next) => {
    const { imageURL, name, color, size, price, stock } = request.body;

    pool.query(
        'INSERT INTO lubrene(imageURL, name, color, size, price, stock) VALUES($1, $2, $3, $4, $5, $6)',
        [imageURL, name, color, size, price, stock],
        (err, res) => {
            if (err) return next(err);

            response.redirect('/lubrene');
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
        pool.query(`UPDATE lubrene SET ${field}=($1) where id=($2)`,
        [request.body[field], id],
        (err, res) => {
            if (err) return next(err);

            if(index === fields.length - 1) response.redirect('/lubrene');
        }
        )
    })
})

router.delete('/:id', (request, response, next) => {
    const { id } = request.params;

    pool.query(
        'DELETE FROM lubrene WHERE id=$1', [id], (err, res) => {
            if (err) return next(err);

            response.redirect('/lubrene');
        }
    )
})

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> 43a759cc7dc2df213badf34c55a1f2ea8f842c96
