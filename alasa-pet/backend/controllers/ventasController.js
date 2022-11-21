import Venta from "../models/venta.js";



const prueba = (req, res) => {
    res.send({ 
        msg : "En esta ruta se gestionará todas las peticiones correspondientes al modelo de Venta"
    })
};


//POST
const createVentas = async (req, res) => {
    try {
        const venta = new Venta(req.body);
        const ventaGuardado = await venta.save();
        res.json(ventaGuardado);
    } catch (error) {
        console.log(error.message);
    }
};

// GET por id
const getVenta = async (req, res) => {
    try {
        const OneVenta = await Venta.findById(req.params.id);
        if(!OneVenta){
            return res.sendStatus(404);
        }
        else{
            return res.json(OneVenta);
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

//GET
const getVentas = async (req, res) => {
    try {
        const ventas = await Venta.find();
        res.send(ventas);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: error.message});
    }
};


//UPDATE
const updateVentas = async (req, res) => {
    try {
        const estadoVenta = await Venta.findById(req.params.id);
        if(estadoVenta.estado === "vigente"){
            estadoVenta.estado = "cancelada";
            await estadoVenta.save();
            res.json({
                msg: "La venta está cancelada"
            });
        }
    } catch (error) {
        console.log(error.message);
    }
};

//DELETE
const deleteVentas = async (req, res) => {
    
};



export{
    prueba,
    createVentas,
    getVenta,
    getVentas,
    updateVentas,
    deleteVentas
};

