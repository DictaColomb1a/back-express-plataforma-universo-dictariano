const express = require('express');
const { getMenus } = require('../controllers/menuController');

const router = express.Router();

// Ruta para obtener los menús
router.get('/menus', getMenus);

module.exports = router;
