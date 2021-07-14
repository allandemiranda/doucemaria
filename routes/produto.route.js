var express = require('express');
var router = express.Router();
const Produto = require('../models/produto.model');

router.get('/', async (req, res) => {
    try {
        const produtos = await Produto.find();
        return res.status(200).send({ produtos });
    } catch (error) {
        return res.status(500).send({ error });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const produto = await Produto.findById(id);
        if (produto) {
            return res.status(200).send({ produto });
        } else {
            return res.status(400).send({ error: 'Não existe' });
        }
    } catch (error) {
        return res.status(500).send({ error });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const produto = await Produto.findById(id);
        if (produto) {
            await produto.delete();
            return res.status(200).send();
        } else {
            return res.status(400).send({ error: 'Não existe' });
        }
    } catch (error) {
        return res.status(500).send({ error });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, valor } = req.body;
        let produto = await Produto.findById(id);
        produto.nome = nome;
        produto.valor = valor;
        produto = await produto.save();
        return res.status(201).send({ produto });
    } catch (error) {
        return res.status(500).send({ error });
    }
});

router.post('/', async (req, res) => {
    try {
        const { nome, valor } = req.body;
        const produto = await Produto.create({ nome, valor });
        return res.status(201).send({ produto });
    } catch (error) {
        return res.status(500).send({ error });
    }
});

module.exports = router;