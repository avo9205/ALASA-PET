import mongoose from "mongoose";

//Definimos la estructura de los datos que tendran los usuarios
const productoSchema = mongoose.Schema({

    nombre:{
        type: String,
        required: true,
        trim:true
    },
    descripcion:{
        type: String,
        required: true,
        trim: true
    },
    precio:{
        type: Number,
        required: true,
        trim: true
    },
    image:{
        url: String,
        public_id: String,
        
    },
    stock:{
        type: Number,
        required: true,
        trim: true
    }
});



export default mongoose.model('Producto', productoSchema);  