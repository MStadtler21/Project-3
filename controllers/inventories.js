import Inventory from '../models/Inventory.js';

export const createInventory = async (req, res) => {    
    const newInventory = new Inventory(req.body);

    try {
        await inventory.save();

        res.json(newInventory);
    } catch {
        res.json({ message: err })
    };
};

export const getAllInventory = (req, res) => {
    res.send("Placeholder")
};