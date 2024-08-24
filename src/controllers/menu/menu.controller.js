const Menu = require('../models/Menu');

exports.getMenus = async (req, res) => {
  try {
    const menus = await Menu.find();
    res.json({ ok: true, menus });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
};
