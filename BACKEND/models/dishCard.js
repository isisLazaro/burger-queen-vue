import mongoose, { Schema } from "mongoose";

const dishCardSchema = new Schema({
    categoria: { type: String, maxlength: 50, unique: true, required: true },
    //hamburguesas, entradas, jochos
    estado: { type: Number, default: 1 },
    createdAt: { type: Date, default: Date.now }
});

const DishCard = mongoose.model("dishcard", dishCardSchema);

export default DishCard;