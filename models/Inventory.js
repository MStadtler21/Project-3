import mongoose from "mongoose";

const Schema = mongoose.Schema;

const InventorySchema = new Schema({
    user: {type: String},
    item: { type: String},
    quantity: { type: Number, required: true },
    cost: { type: Number, required: true },
    produce: { type: String },
    meat: { type: String},
    driedGoods: { type: String },
    notes: {type: String }
    // placeHolder: { type: String, required: true },
});

//   const data = {
//     cost: 50,
//     quantity: 50,
//     unitCost: 1, //calculate ??
//     itemType: produce,
//     produce: yes,
//     meat: no,
//     driedGoods: no,
     
//   };
  
//   Example.create(data)
//     .then(dbExample => {
//       console.log(dbExample);
//     })
//     .catch(({ message }) => {
//       console.log(message);
//     });

const Inventory = mongoose.model("Inventory", InventorySchema);

export default Inventory;