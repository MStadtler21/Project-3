import mongoose from "mongoose";

const Schema = mongoose.Schema;

const DrinkSchema = new Schema ({
    drinkType: {type: String, required: true},
    drinkQuantity: {type: Number, required: true},
    drinkLevel: {type: Number, required: true}
})

const Drink = mongoose.model("Drink", DrinkSchema);

export default Drink;