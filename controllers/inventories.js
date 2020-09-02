import Inventory from '../models/Inventory.js';

export const createOrder = async (req, res) => {    
    const newInventory = new Inventory(req.body);
    console.log(req.body);
    try {
        await newInventory.save();

        console.log(newInventory);

        res.json(newInventory);
    } catch (error) {
        console.log("Error", error);
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

export const deleteOrder = async (req, res) => {
    try {
        const order = await Inventory.deleteOne({_id: req.params.id});
        res.status(200).end();
    } catch (error) {
        console.log("Backend hit", error);
        res.json({ message: error })
    }
}