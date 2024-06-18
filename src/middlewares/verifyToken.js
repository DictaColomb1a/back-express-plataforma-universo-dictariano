const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {

    const token = req.header("x-auth-token");

    if (!token) {

        return res.status(401).json({
            ok: false,
            msg: "Token No valido"
        });
    }

    try {
        const payload = jwt.verify(token, process.env.KEY_SECRET);//aca quiero que me carge la verficiacion

        req.uid = payload.id;//aca creamos dentro del req, la propiedad uid
        next();
        
        
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: "Token No valido"
        });
    }


};

module.exports = verifyToken;