import mongoose, { Mongoose } from "mongoose";

const url = "mongodb://localhost:27017/e-comerce";

mongoose.connect(url);

const db = mongoose.connection;

db.on("open", () => {
  console.log("Conexión exitosa");
});
db.on("error",()=>{
    console.log("Error en la conexión");
})

export default db