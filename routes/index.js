const { Router } = require('express');
const ando = require('./ando');
const lubrene = require('./lubrene');
const users = require('./users');
const connec = require('./connec');
const duff = require('./duff');

const router = Router();

router.use('/ando', ando);
router.use('/lubrene', lubrene);
router.use('/connec', connec);
router.use('/duff', duff);
router.use('/users', users);

module.exports = router;