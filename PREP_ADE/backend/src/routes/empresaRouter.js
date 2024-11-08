import { Router } from "express"
import { getEmpresa } from "../controllers/empresaContrller.js";

const router = Router();

router.get("/", getEmpresa);

export default router;