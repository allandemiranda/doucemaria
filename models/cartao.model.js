const mongoose = require('../services/mongoDB.service');
const Schema = mongoose.Schema;
const mongoose_autopopulate = require('mongoose-autopopulate');
const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose);

const CartaoSchema = new Schema({
    compras: {
        type: [Schema.Types.ObjectId],
        ref: 'Compra',
        autopopulate: true
    }
});

CartaoSchema.plugin(mongoose_autopopulate);

CartaoSchema.plugin(autoIncrement.plugin, {
    model: 'Cartao',
    field: 'numero',
    startAt: 1
});

const Cartao = mongoose.model('Cartao', CartaoSchema);

module.exports = Cartao;