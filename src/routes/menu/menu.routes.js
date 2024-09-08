// routes/menu/menu.routes.js
const express = require('express');
const { getMenus } = require('../../controllers/menu/menu.controller');
const router = express.Router();

// Ruta para obtener todos los menús
router.get('/', getMenus);

module.exports = router;