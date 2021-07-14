const mongoose = require('../services/mongoDB.service');
const Schema = mongoose.Schema;

const AdministradorSchema = new Schema({
    login: {
        type: String,
        required: true,
        unique: true
    },
    senha: {
        type: String,
        required: true
    }
});

const Administrador = mongoose.model('Administrador', AdministradorSchema);

module.exports = Administrador;