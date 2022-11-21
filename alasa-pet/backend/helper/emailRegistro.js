//debemos instalar la dependencia de node mailer
//nos permite envi<ar correos de forma sencilla


import nodemailer from 'nodemailer';

const emailRegistro = async (datos) =>{

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth:{
            //type: "0Auth2"
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    })

const {email, nombre, token} = datos;

//Enviar email 
const info = await transport.sendMail({
    from: "AEC- Administrador de Ecomerce articulos",
    to: email,
    subject: "Comprueba tu cuenta en AEC",
    text: "Comprueba tu cuenta en AEC",
    html: `<p> Hola: ${nombre}, comprueba tu cuenta con AEC.
           <p> Tu cuenta ya esta lista, solo debes comprobar en el seguiente enlace:
           <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar</a>
           <p> si no creaste esta cuenta ignora el mensaje </p>`

});

};

export default emailRegistro;