import mongoose, { Schema, models } from "mongoose";

const memoraCollections = "memora";
const memoraSchema = new Schema(
    {
        ci: {
            type: String,
            required: true,
            unique: true,
        },
        nombre: {
            type: String,
            required: true,
        },
        apellido: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        codigo: {
            type: String,
        },
        link: {
            type: String,
            required: true,
            unique: true,
        },
    },
    { timestamps: true }
);

//const User = mongoose.model(userCollections, userSchema)

const Memora = models.memora || mongoose.model(memoraCollections, memoraSchema);

export default Memora;
