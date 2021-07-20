const mongoose = require('../services/mongoDB.service');
const Schema = mongoose.Schema;
const mongoose_autopopulate = require('mongoose-autopopulate');

const CompraSchema = new Schema({  
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