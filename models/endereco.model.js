const mongoose = require('../services/mongoDB.service');
const Schema = mongoose.Schema;

const EnderecoSchema = new Schema({
    rua: {
        type: String,
        required: true
    },
    numero: {
        type: String,
        required: true
    },
    bairro: {
        type: String,
        required: true
    },
    cep: {
        type: String,
        required: true
    },
    complemento: {
        type: String,
        default: ""
    },
    cidade: {
        type: String,
        default: "Natal"
    },
    uf: {
        type: String,
        default: "RN"
    }
});

const Endereco = mongoose.model('Endereco', EnderecoSchema);

module.exports = Endereco;