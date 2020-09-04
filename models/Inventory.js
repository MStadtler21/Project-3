import mongoose from "mongoose";

const Schema = mongoose.Schema;

const InventorySchema = new Schema({
    item: { type: String},
    quantity: { type: Number, required: true },
    cost: { type: Number, required: true },
    produce: { type: String },
    meat: { type: String},
    driedGoods: { type: String },
    notes: {type: String },
    userId: {type: String },
});


const Inventory = mongoose.model("Inventory", InventorySchema);

export default Inventory;