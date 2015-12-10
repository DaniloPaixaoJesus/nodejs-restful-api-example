var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Create model variable
var ContatoSchema = new Schema({
	nome: {type: String, required: true, trim: true}
});

module.exports = mongoose.model('Contato', ContatoSchema);