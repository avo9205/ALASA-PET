import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        usuario: { type: String },
        password: { type: String },
    },
    {collation:'user'}

);
export default mongoose.model('UserModel', UserSchema);