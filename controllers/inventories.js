import Inventory from '../models/Inventory.js';

export const createOrder = async (req, res) => {    
    const newInventory = new Inventory(req.body);

    try {
        await inventory.save();

        console.log(newInventory);

        res.json(1, newInventory);
    } catch (error) {
        res.json({ message: error })
    };
};

export const getOrders = async (req, res) => {
    try {
        const orders = await Inventory.find();
        console.log(2, orders)
        
        res.json(orders)
    } catch (error) {
        res.json({ message: error })
    }
};