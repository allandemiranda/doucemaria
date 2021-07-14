const mongoose = require('../services/mongoDB.service');
const Schema = mongoose.Schema;
const mongoose_delete = require('mongoose-delete');

const ProdutoSchema = new Schema({
  nome: {
    type: String,
    required: true
  },
  valor: {
    type: Number,
    required: true
  }
});

ProdutoSchema.plugin(mongoose_delete);

const Produto = mongoose.model('Produto', ProdutoSchema);

module.exports = Produto;