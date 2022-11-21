//codigo para inicializar el servidor
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import conectarDB from "./config/db.js";//conectar base de datos

//======segunda parte video ecommerce======

import usuariosRoutes from "./routes/usuariosRoutes.js";//rutas de ususario
import productosRoutes from "./routes/productosRoutes.js";//rutas de productos
import ventasRoutes from "./routes/ventasRoutes.js"//rutas de ventas
import fileUpload from "express-fileupload";


const PORT = process.env.PORT || 4000;
dotenv.config()

//se le agrega toda la funcionalidad del servidor express
const app=express();

app.use(express.json());

//funciobalidad de manejo de imagenes
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './files'
}));
conectarDB();

//middlewares
//se utiliza para realizar la comunicacion entre el servidor del 
//frontend y el backend
/*const corsOptions ={
    origin: function(origin, callback){
        if(dominiosPermitidos.indexOf(origin) !== -1){
            //el origen del request(peticion del usuario) esta permitido
            callback(null,true);
        }
        else{
            callback(new Error('No permitido por CORS'))
        }
    }
};

app.use(cors(corsOptions));*/


//Gestion de usuarios
app.use('/api/usuarios', usuariosRoutes);
//Gestion de productos
app.use('/api/productos', productosRoutes);
//Gestion de productos
app.use('/api/ventas', ventasRoutes);



app.listen(PORT, () =>{
    console.log(`Servidor funcionando en el puerto: ${PORT}`);
});

