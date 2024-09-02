const express = require('express');
const aspirantRouter = require('./aspirant.router');
const router = express.Router();

// colocar las rutas aquí
router.use(aspirantRouter);

module.exports = router;