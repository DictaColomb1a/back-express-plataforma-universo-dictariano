const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Esquema para los submenús
const submenuSchema = new Schema({
  submenu: { type: String, required: true },
  ruta: { type: String, required: true }
});

// Esquema para el menú
const menuSchema = new Schema({
  menu: { type: String, required: true },
  ruta: { type: String, default: '' },
  submenus: [submenuSchema],
  createdAt: { type: Date, default: Date.now },
  state: { type: Boolean, default: true }
});

// Exportar el modelo
module.exports = mongoose.model('Menu', menuSchema);

