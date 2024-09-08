// models/menu/menuModel.js
const mongoose = require('mongoose');

const submenuSchema = new mongoose.Schema({
  submenu: { type: String, required: true },
  ruta: { type: String, required: true },
});

const menuSchema = new mongoose.Schema({
  menu: { type: String, required: true },
  ruta: { type: String, default: '' },
  submenus: [submenuSchema],
  createdAt: { type: Date, default: Date.now },
  state: { type: Boolean, default: true },
});

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;
