const mongoose = require('../services/mongoDB.service');
const Schema = mongoose.Schema;
const mongoose_autopopulate = require('mongoose-autopopulate');
const mongoose_delete = require('mongoose-delete');

const ClienteSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    endereco: {
        type: Schema.Types.ObjectId,
        ref: 'Endereco',
        autopopulate: true,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    cartao: {
        type: Schema.Types.ObjectId,
        ref: 'Cartao',
        autopopulate: true,
        required: true
    }
});

ClienteSchema.plugin(mongoose_delete);
ClienteSchema.plugin(mongoose_autopopulate);

const Cliente = mongoose.model('Cliente', ClienteSchema);

module.exports = Cliente;