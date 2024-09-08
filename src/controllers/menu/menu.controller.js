// controllers/menu/menuController.js
const Menu = require('../../models/menu/menuModel');

// Obtener todos los menús
const getMenus = async (req, res) => {
  try {
    const menus = await Menu.find();
    res.json({
      ok: true,
      menus,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: 'Error al obtener los menús',
    });
  }
};

module.exports = {
  getMenus,
};

