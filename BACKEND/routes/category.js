import routerx from "express-promise-router";
import categoryController from "../controllers/CategoryController";
import auth from "../middlewares/auth";

const router = routerx();

router.post("/add", auth.verifyAdministradora, categoryController.add);
router.get("/query", auth.verifyAdministradora, categoryController.query);
router.get("/list", auth.verifyAdministradora, categoryController.list);
router.put("/update", auth.verifyAdministradora, categoryController.update);
router.delete("/remove", auth.verifyAdministradora, categoryController.remove);
router.put("/activate", auth.verifyAdministradora, categoryController.activate);
router.put("/deactivate", auth.verifyAdministradora, categoryController.deactivate);

export default router;