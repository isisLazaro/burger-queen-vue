import mongoose, { Schema } from "mongoose";

const dishCardSchema = new Schema({
    nombre: { type: String, maxlength: 50, unique: true, required: true },
    //hamburguesas, entradas, jochos
    estado: { type: Number, default: 1 },
    createdAt: { type: Date, default: Date.now }
});

const DishCard = mongoose.model("dishCard", dishCardSchema);

export default DishCard;

