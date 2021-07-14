var express = require('express');
var router = express.Router();
const Administrador = require('../models/administrador.model');
const jwt = require('jsonwebtoken');

router.post('/local/', async (req, res) => {
    try {
        const { login, senha } = req.body;
        const administrador = await Administrador.findOne({ login });
		if (!administrador) {
			return res.status(400).send({ error: 'Usuário não encontrado' });
		}
		if (senha != administrador.senha) {
			return res.status(400).send({ error: 'Senha inválida' });
		}
		administrador.senha = undefined;
		const token = jwt.sign({ id: administrador.id }, process.env.JWT_PASS, {
			expiresIn: 10800
		});
		return res.status(200).send({ administrador, token });
    } catch (error) {
        return res.status(500).send({ error });
    }
});

module.exports = router;