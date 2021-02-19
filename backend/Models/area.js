const mongoose = require("mongoose");

const objetoSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: false,
  },
  dispositivo: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Dispositivo',
    required: true,
  },
  idpadre: {
    type: String,
    required: true,
  },
  alertas:{
    type: Number,
    required: true,
    default: 0
  }
});

//                               Objeto
module.exports = mongoose.model("area", objetoSchema);