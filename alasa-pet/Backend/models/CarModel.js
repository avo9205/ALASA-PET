import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CarSchema = new Schema(
    {
        nombre: { type: String },
        precio: { type: Intl },
        cantidad: { type: Intl },
        idProducto: { type: Intl },
    },
    {collation:'carshop'}

);
export default mongoose.model('CarModel', CarSchema);