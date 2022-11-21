import Usuario from "../models/usuario.js";
import emailRegistro from "../helper/emailRegistro.js";



const prueba = (req,res) => {
    res.send({
        msg:"en esta ruta gestionaremos todas las peticiones al modelo de usuarios"
    });
};
    

//======REGISTRAR=====
const registrar = async (req,res) => {
    
    //se definen los datos del nombre,email y password en el body de req
    const {nombre, email, password, telefono , direccion, web} = req.body;
    
        
    //validar usuario duplicado
    //Metodo findOne: busca por los diferentes atributos de la direccion
    const existeUsuario = await Usuario.findOne({email});

    if (existeUsuario){
        const error = new Error('El usuario a sido registrado');
        return res.status(400).json({msg: error.message});
    };

    try{
        const usuario = new Usuario(req.body);
        const usuarioGuardado = await usuario.save();
        
    
    emailRegistro({
        email,
        nombre,
        token: usuarioGuardado.token
    });

    res.json(usuarioGuardado);
    
} catch (error){
    console.error(error.message);
};
};    
    
    

//====CONFIRMAR=====
const confirmar = async (req,res) => {
    //req.params: Para leer datos de la url, en este caso el token
    //previamente definido en la ruta
    const {token} = req.params;
    const usuarioConfirmar = await Usuario.findOne({token});
    
    if(!usuarioConfirmar){
        const error = new Error("Token no valido");
        return res.status(404).json({msg: error.message});
    };

    try {
        
        usuarioConfirmar.token = null,
        usuarioConfirmar.confirmado = true;
        await usuarioConfirmar.save();
        res.json({
            msg: "Usuario confirmado correctamente"
        });

    } catch (error) {
        console.error(error.message);
    }
};


//Exports
export{
        prueba,
        registrar,
        confirmar
    } 
