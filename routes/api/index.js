import express from "express";

import inventoryRoutes from "./inventories.js";

const router = express.Router();

router.use("/inventories", inventoryRoutes);

export default router;