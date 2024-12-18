const mongoose = require('mongoose');

//require("dotenv").config();
//const MONGO_URI = process.env.MONGO_URI;

mongoose.connect("mongodb+srv://AnaTelma:ju040203@cluster0.58sxb.mongodb.net/Appturismo", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB com sucesso!'))
  .catch((error) => console.error('Erro ao conectar ao MongoDB:', error));

var Schema = mongoose.Schema;

const pontosturisticos = new Schema ({
   
    cpf        : { type:Number, required: true},
    nome       : { type:String, required: true},
    cep        : { type:Number },
    telefone   : { type:Number, required: true},
    email      : { type:String, required: true}
})

const pontosturisticosModel = mongoose.model('pontosturisticos', pontosturisticos);


module.exports = {pontosturisticosModel}