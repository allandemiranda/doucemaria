const mongoose = require('../services/mongoDB.service');
const Schema = mongoose.Schema;
const mongoose_autopopulate = require('mongoose-autopopulate');

const CompraSchema = new Schema({
  lista: {
    type: [Map],
    of: new Schema({
      produto: new Schema({
        nome: {
          type: String,
          required: true
        },
        valor: {
          type: Number,
          required: true
        }
      }),
      quantidade: {
        type: Number,
        default: 1
      }
    })
  },
  valor: {
    type: Number,
    required: true
  },
  formaDePagamento: {
    type: String,
    required: true
  },
  cliente: {
    type: Schema.Types.ObjectId,
    ref: 'Cliente',
    autopopulate: true
  },
  data: {
    type: Date,
    default: Date.now
  },
  endereco: {
    type: Schema.Types.ObjectId,
    ref: 'Endereco',
    autopopulate: true,
    required: true
  }
});

CompraSchema.plugin(mongoose_autopopulate);

const Compra = mongoose.model('Compra', CompraSchema);

module.exports = Compra;