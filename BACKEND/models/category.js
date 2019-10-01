import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({
    nombre: { type: String, maxlength: 50, unique: true, required: true },
    //hamburguesas, entradas, jochos
    descripcion: { type: String, maxlength: 255 },
    estado: { type: Number, default: 1 },
    createdAt: { type: Date, default: Date.now }
});

const Category = mongoose.model("category", categorySchema);

export default Category;

