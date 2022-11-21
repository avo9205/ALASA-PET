import { useState} from 'react'
import { Link } from 'react-router-dom'
import clienteAxios from '../../config/axios'

import Alerta from '../../components/Alerta'

import imagenRegistro from '../../assets/imagen-registro.png'
import cajaCarton from '../../assets/caja-de-carton.png'

const Registro = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repetirPassword, setRepetirPassword] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');
    const [web, setWeb] = useState('');

    const [alerta, setAlerta] = useState({});

    const handleSubmit = async (e) =>{
        e.preventDefault();
        if([nombre, email, password, repetirPassword].includes('')){
            setAlerta({msg: "Hay campos vacios", error: true});
            return;
        };

        if(password != repetirPassword){
            setAlerta({msg: "Las contraseñas no son iguales", error: true}); 
            return;
        }

        if(password.length < 6){
            setAlerta({msg: "La contraseña es muy corta, agrega como mínimo 6 caracteres", error: true});
            return;
        }

        setAlerta({});

        //Creando el usuario en la API
        try {
            const data = await clienteAxios.post('/usuarios/', {nombre, email, password, telefono, direccion, web});
            console.log(data);
            setAlerta({
                msg: "Creado correctamente, revisa tu email", error: false
            });
            setNombre("");
            setEmail("");
            setPassword("");
            setRepetirPassword("");
            setTelefono("");
            setDireccion("");
            setWeb("");

        } catch (error) {
            setAlerta({
                msg: error.response.data.msg, 
                error: true
            });
        }
    };

    const {msg} = alerta;


    return(
        <div className="flex w-full">
            <div className="flex flex-col justify-center items-center lg:w-2/4 mr-10 md:flex-row">
                <img src={cajaCarton} alt="imagen" className="relative w-0 md:w-1/2 lg:w-0 sm:w-0" />
                <div>
                    <h3 className="font-bold text-6xl uppercase text-center md:w-2/3 mx-auto">Registrate y disfruta de los <span className="text-sky-700">productos</span></h3>
                    {msg && <Alerta
                        alerta={alerta}/>
                    }
                    <form onSubmit={handleSubmit} className="p-4 mx-auto w-96 sm:px-9 mt-8 shadow-md">
                        <div className="mb-5">
                            <label htmlFor="nombre" className="font-medium">Nombre</label>
                            <input type="text" id="nombre" className="block placeholder-slate-400 p-2 w-full bg-slate-100" placeholder="ej: Juan Jose Perez Alvarez" value={nombre} onChange={ e=> setNombre(e.target.value)}/>
                        </div>
                        <div className="mb-5">
                            <label htmlFor="email" className="font-medium">Email</label>
                            <input type="text" id="email" className="block placeholder-slate-400 p-2 w-full bg-slate-100" placeholder="ej: admin@mail.com" value={email} onChange={e =>setEmail(e.target.value)} />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="direccion" className="font-medium">Dirección</label>
                            <input type="text" id="direccion" className="block placeholder-slate-400 p-2 w-full bg-slate-100" placeholder="ej: Calle 72 #14-23" value={direccion} onChange={e =>setDireccion(e.target.value)} />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="web" className="font-medium">Dirección Web</label>
                            <input type="text" id="web" className="block placeholder-slate-400 p-2 w-full bg-slate-100" placeholder="ej: https://github.com/user83" value={web} onChange={e =>setWeb(e.target.value)} />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="telefono" className="font-medium">Teléfono</label>
                            <input type="number" id="telefono" className="block placeholder-slate-400 p-2 w-full bg-slate-100" placeholder="ej: 3107035469" value={telefono} onChange={e=>setTelefono(e.target.value)} />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="password" className="font-medium">Password</label>
                            <input type="password" id="password" className="block placeholder-slate-400 p-2 w-full bg-slate-100" placeholder="************" value={password} onChange={e=>setPassword(e.target.value)} />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="repitepassword" className="font-medium">Repite tu Password</label>
                            <input type="password" id="repitepassword" className="block placeholder-slate-400 p-2 w-full bg-slate-100" placeholder="************" value={repetirPassword} onChange={e=>setRepetirPassword(e.target.value)} />
                        </div>
                        <input type="submit" value="Crear Cuenta" className="uppercase bg-sky-700 text-white p-2 rounded-md w-full" />
                        <div className="flex justify-betwwen px-4 mt-5 text-slate-500">
                            <Link to="/" className=''>Ya tengo cuenta. </Link>
                            <Link to="/olvide-password">Olvidé mi password. </Link>
                        </div>
                    </form>
                </div>
            </div>
            <div className="h-full w-0 lg:w-full">
                <img src={imagenRegistro} alt="imagen login" className="h-screen w-screen" />
            </div>
        </div>
    )
}

export default Registro
