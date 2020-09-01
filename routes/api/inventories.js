import express from "express";

import { createInventory, getAllInventory } from "../../controllers/inventories.js";

const router = express.Router();

router.get("/", getAllInventory);
router.post("/", createInventory);

export default router;