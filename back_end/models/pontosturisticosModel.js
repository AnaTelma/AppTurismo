const mongoose = require('mongoose');

//require("dotenv").config();
//const MONGO_URI = process.env.MONGO_URI;

mongoose.connect("mongodb+srv://AnaTelma:<db_password>@cluster0.58sxb.mongodb.net/", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB com sucesso!'))
  .catch((error) => console.error('Erro ao conectar ao MongoDB:', error));

var Schema = mongoose.Schema;

const pontosturisticos = new Schema ({
   
    id :  {type:Number, required: true},
    nome   : { type:String, required: true},
    cpf   : { type:Number, required: true},
    tipo   : { type:String, required: true},
    descricao   : { type:String, required: true},
    email      : { type:String, required: true},
    localizacao : { type:String, required: true}
})

const pontosturisticosModel = mongoose.model('pontosturisticos', pontosturisticos);


module.exports = {pontosturisticosModel}