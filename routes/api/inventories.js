import express from "express";

import { createOrder, getOrders, deleteOrder } from "../../controllers/inventories.js";

const router = express.Router();

router.get("/", getOrders);
router.post("/", createOrder);
router.delete("/:id", deleteOrder);

export default router;