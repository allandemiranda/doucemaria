var express = require('express');
var router = express.Router();
const Compra = require('../models/compra.model');
const Cliente = require('../models/cliente.model');
const Produto = require('../models/produto.model');
const Cartao = require('../models/cartao.model');

router.get('/', async (req, res) => {
    try {
        const compras = await Compra.find();
        return res.status(200).send({ compras });
    } catch (error) {
        return res.status(500).send({ error });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const compra = await Compra.findById(id);
        if (compra) {
            return res.status(200).send({ compra });
        } else {
            return res.status(400).send({ error: 'Não existe' });
        }
    } catch (error) {
        return res.status(500).send({ error });
    }
});

router.post('/', async (req, res) => {
    try {
        const { valor, formaDePagamento } = req.body;
        let { lista, cliente } = req.body;
        cliente = await Cliente.findById(cliente);
        const endereco = cliente.endereco;
        lista = await Promise.all(lista.map(async (item) => {
            const produto = await Produto.findById(item.produto);
            return {
                produto: {
                    nome: produto.nome,
                    valor: produto.valor
                },
                quantidade: item.quantidade
            };
        }));
        const compra = await Compra.create({ lista, valor, formaDePagamento, cliente, endereco });
        let cartao = await Cartao.findById(cliente.cartao);
        cartao.compras.push(compra.id);
        await cartao.save();
        return res.status(201).send({ compra });
    } catch (error) {
        return res.status(500).send({ error });
    }
});

module.exports = router;