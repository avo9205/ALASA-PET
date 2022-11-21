import mongoose from "mongoose";
import bcrypt from "bcrypt";
import generarId from "../helper/generarId.js";


//Definimos la estructura de los datos que tendran los usuarios
const usuarioSchema = mongoose.Schema({

    nombre:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true
    },
    password:{
        type: String,
        required: true
    },
    telefono:{
        type: String,
        default: null,
        trim: true
    },
    direccion:{
        type: String,
        default: null,
        trim: true
    },
    web:{
        type: String,
        default: null,  
        trim: true
    },
    token:{
        type: String,
        default: generarId
    },
    confirmado:{
        type: Boolean,
        default:false
    },
    rol:{
        type: String,
        default: "usuario",
        trim: true
    }
});



//Seccion donde ciframos nuestro password a traves de Hash.
usuarioSchema.pre('save', async function(next){
    if( !this.isModified('password')){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
});


//Confirma el password del usuario
usuarioSchema.methods.comprobarPassword = async function(passwordFormulario){
    return await bcrypt.compare(passwordFormulario, this.password);
};


const Usuario = mongoose.model('Usuario', usuarioSchema);
export default Usuario;