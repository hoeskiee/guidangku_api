const { Router } = require('express');
const ando = require('./ando');
const lubrene = require('./lubrene');

const router = Router();

router.use('/ando', ando);
router.use('/lubrene', lubrene);

module.exports = router;