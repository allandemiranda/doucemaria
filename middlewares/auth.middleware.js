const jwt = require('jsonwebtoken');

const Administrador = require('../models/administrador.model');

module.exports = (req, res, next) => {
	try {
		const authHeader = req.headers.authorization;
		if (!authHeader) {
			return res.status(401).send({ error: "Token não informado" });
		}
		const parts = authHeader.split(' ');
		if (!parts.length === 2) {
			return res.status(401).send({ error: "Token contem erro de formato" });
		}
		const [scheme, token] = parts;
		if (!/^Bearer$/i.test(scheme)) {
			return res.status(401).send({ error: "Token contem erro de formato" });
		}
		jwt.verify(token, process.env.JWT_PASS, async (err, decode) => {
			if (err) {
				return res.status(401).send({ error: "Token inválido" });
			}
			const administrador = await Administrador.findById(decode.id);
			if (!administrador) {
				return res.status(401).send({ error: "Token inválido" });
			}
			req.administrador = administrador;
			return next();
		});
	} catch (err) {
		return res.status(400).send({ error: "Erro ao validar Token" });
	}
}