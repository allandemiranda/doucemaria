var express = require('express');
var router = express.Router();
const Cartao = require('../models/cartao.model');

router.get('/', async (req, res) => {
    try {
        const cartoes = await Cartao.find();
        return res.status(200).send({ cartoes });
    } catch (error) {
        return res.status(500).send({ error });
    }
});

router.get('/:numero', async (req, res) => {
    try {
        const { numero } = req.params;
        const cartoes = await Cartao.find({numero});
        if (cartoes.length == 1) {
            const cartao = cartoes[0];
            return res.status(200).send({ cartao });
        } else {
            return res.status(400).send({ error: 'Não existe' });
        }
    } catch (error) {
        return res.status(500).send({ error });
    }
});

router.get('/id/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const cartao = await Cartao.findById(id);
        if (cartao) {
            return res.status(200).send({ cartao });
        } else {
            return res.status(400).send({ error: 'Não existe' });
        }
    } catch (error) {
        return res.status(500).send({ error });
    }
});

module.exports = router;