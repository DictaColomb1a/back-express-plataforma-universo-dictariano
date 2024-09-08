const express = require('express');
const { getMenus, createMenus } = require('../../controllers/menu/menu.controller');

const router = express.Router();

// Ruta para obtener todos los menús
router.get('/', getMenus);

// Ruta para insertar menús
router.post('/', createMenus);

module.exports = router;
