const mongoose = require('../services/mongoDB.service');
const Schema = mongoose.Schema;
const mongoose_autopopulate = require('mongoose-autopopulate');
const mongoose_delete = require('mongoose-delete');
const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose);

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
        type: Number,
        default: 1
    },
    compras: {
        type: [Schema.Types.ObjectId],
        ref: 'Compra',
        autopopulate: true
    }
});

ClienteSchema.plugin(mongoose_delete);
ClienteSchema.plugin(mongoose_autopopulate);

ClienteSchema.plugin(autoIncrement.plugin, {
    model: 'Cliente',
    field: 'cartao',
    startAt: 1
});

const Cliente = mongoose.model('Cliente', ClienteSchema);

module.exports = Cliente;