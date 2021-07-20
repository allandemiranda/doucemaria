var express = require('express');
var router = express.Router();
const Cliente = require('../models/cliente.model');
const Endereco = require('../models/endereco.model');

router.get('/', async (req, res) => {
  try {
    const clientes = await Cliente.find();
    return res.status(200).send({ clientes });
  } catch (error) {
    return res.status(500).send({ error });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const cliente = await Cliente.findById(id);
    if (cliente) {
      return res.status(200).send({ cliente });
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
    const cliente = await Cliente.findById(id);
    if (cliente) {
      await cliente.delete();
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
    let { endereco } = req.body;       
    endereco = await Endereco.create({ 
      rua: endereco.rua,
      numero: endereco.numero,
      bairro: endereco.bairro,
      cep: endereco.cep,
      complemento: endereco.complemento,
      cidade: endereco.cidade,
      uf: endereco.uf });
    const { nome, telefone } = req.body; 
    let cliente = await Cliente.findById(id);
    cliente.nome = nome;
    cliente.telefone = telefone;    
    cliente.endereco = endereco;
    cliente = await cliente.save();
    return res.status(201).send({ cliente });
  } catch (error) {
    return res.status(500).send({ error });
  }
});

router.post('/', async (req, res) => {
  try {    
    let { endereco } = req.body;
    endereco = await Endereco.create({ 
      rua: endereco.rua,
      numero: endereco.numero,
      bairro: endereco.bairro,
      cep: endereco.cep,
      complemento: endereco.complemento,
      cidade: endereco.cidade,
      uf: endereco.uf });
    const { nome, telefone } = req.body;
    const cliente = await Cliente.create({ nome, endereco, telefone });
    return res.status(201).send({ cliente });
  } catch (error) {
    return res.status(500).send({ error });
  }
});

module.exports = router;
