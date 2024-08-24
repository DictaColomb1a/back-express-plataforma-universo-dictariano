const { Schema, model } = require('mongoose');

const SubmenuSchema = new Schema({
  submenu: String,
  ruta: String,
});

const MenuSchema = new Schema({
  menu: String,
  ruta: String,
  submenus: [SubmenuSchema],
  createdAt: { type: Date, default: Date.now },
  state: { type: Boolean, default: true }
});

const Menu = model('Menu', MenuSchema);

module.exports = Menu;
