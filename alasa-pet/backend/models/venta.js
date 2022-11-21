import mongoose from "mongoose";

//Definimos la estructura de los datos que tendran los usuarios
const ventaSchema = mongoose.Schema({

    cliente:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuario"
    },
    articulos:{
        type: Array,
        required: true
    },
    total:{
        type: Number,
        required: true,
        trim: true,
    },
    
    confirmado:{
        type: Boolean,
        default: false
    },
    estado:{
        type: String,
        default: "vigente"
    }
    
},
    
    {
        timestamps: true,
    }
);


const Venta = mongoose.model('Venta', ventaSchema);
export default Venta;
