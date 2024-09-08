// routes/menu/menuRoutes.js
const express = require('express');
const { getMenus } = require('../../controllers/menu/menuController');
const router = express.Router();

// Ruta para obtener todos los menús
router.get('/', getMenus);

module.exports = router;
