/* eslint-disable @typescript-eslint/no-unused-vars */

import { Router } from "express";
import { createProduct, getProducts } from "../controllers/productController";

const router = Router();

router.get("/", getProducts);
router.post("/", createProduct)

export default router;