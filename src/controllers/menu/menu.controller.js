const Menu = require('../../models/menu/menu.model');

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

// Insertar datos en la base de datos
const createMenus = async (req, res) => {
    try {
        const menus = [
            {
                menu: "Landing",
                ruta: "",
                submenus: [
                    { submenu: "Nueva Landing", ruta: "/landing/nuevo" },
                    { submenu: "Estadisticas Landing", ruta: "/landing/estadisticas" }
                ],
                createdAt: new Date("2024-01-01T00:00:00.000Z"),
                state: true
            },
            {
                menu: "Cursos",
                ruta: "",
                submenus: [
                    { submenu: "Nuevo Curso", ruta: "/cursos/nuevo" },
                    { submenu: "Estadisticas Cursos", ruta: "/cursos/estadisticas" },
                    { submenu: "Actualizar Curso", ruta: "/cursos/update" }
                ],
                createdAt: new Date("2024-01-01T00:00:00.000Z"),
                state: true
            }
        ];

        await Menu.insertMany(menus);
        res.status(201).json({
            ok: true,
            message: 'Menús insertados correctamente'
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Error al insertar los menús',
            error: error.message
        });
    }
};

module.exports = {
    getMenus,
    createMenus
};
