var express = require('express');
var router = express.Router();
const Cliente = require('../models/cliente.model');

router.get('/', async (req, res) => {
    try {
        const clientes = await Cliente.find();

        const cartoes = await clientes.map(value => {
            return {
                numero: value.cartao,
                quantidade: value.compras.length
            }
        });
        return res.status(200).send({ cartoes });
    } catch (error) {
        return res.status(500).send({ error });
    }
});

router.get('/:numero', async (req, res) => {
    try {
        const { numero } = req.params;
        const clientes = await Cliente.find();

        const cartoes = await clientes.map(value => {
            return {
                numero: value.cartao,
                quantidade: value.compras.length
            }
        });

        const cartao = await cartoes.find(value => value.numero==numero);

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