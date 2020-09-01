const express = require("express");
const router = express.Router();
const Inventory = require("../../models/Inventory");

router.get("/", (req, res) => {
    res.send("Placeholder")
});

router.post("/", async (req, res) => {
    const inventory = new Inventory({
        cost: req.body.cost,
        quantity: req.body.quantity,
        unitCost: req.body.unitCost,
        itemType: req.body.itemType,
        produce: req.body.produce,
        meat: req.body.meat,
        driedGoods: req.body.driedGoods
    })

    try {
    const savedInventory = await inventory.save()
        res.json(data);
    } catch {
        res.json({ message: err })
    };
});

module.exports = router;