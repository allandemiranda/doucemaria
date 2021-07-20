var express = require('express');
var router = express.Router();
const Compra = require('../models/compra.model');
const Cliente = require('../models/cliente.model');

router.get('/', async (req, res) => {
    try {
        const compras = await Compra.find();
        return res.status(200).send({ compras });
    } catch (error) {
        return res.status(500).send({ error });
    }
});

router.post('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        let cliente = await Cliente.findById(id);
        const endereco = cliente.endereco;
        const compra = await Compra.create({ endereco });
        cliente.compras.push(compra.id);
        await cliente.save();
        return res.status(201).send({ compra });
    } catch (error) {
        return res.status(500).send({ error });
    }
});

module.exports = router;