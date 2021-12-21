const { Router } = require('express');
const ando = require('./ando');
const lubrene = require('./lubrene');
const users = require('./users');

const router = Router();

router.use('/ando', ando);
router.use('/lubrene', lubrene);
router.use('/users', users);

module.exports = router;