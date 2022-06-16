// ************ Require's ************
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");

const logDBMiddleware = require("../middlewares/logDBMiddleware");

//validaciones
const validateCreateForm = require("../middlewares/validationsCreate")

//carga de archivos
const uploadFile = require("../middlewares/multerProducts")

//controlador
const productsController = require("../controllers/productsController.js");

// ************ methods() ************

/*** GET ONE PRODUCT ***/
//router.get("/detail/:id", productsController.detail);

/*** CREATE ONE PRODUCT ***/
router.get("/create",validateCreateForm, productsController.create);
router.post(
  "/create",
  uploadFile.single("image"),
  logDBMiddleware,
  validateCreateForm,
  productsController.store
);

/*** EDIT ONE PRODUCT ***/
//router.get("/edit/:id", productsController.edit);
//router.put("/edit/:id", uploadFile.single("image"), productsController.update);

/*** DELETE ONE PRODUCT***/
router.delete("/delete/:id", productsController.destroy);

/*** GET PRODUCTS FROM CART ***/
router.get("/cart", authMiddleware, productsController.cart);
//carrito
router.put("/cart/:id", productsController.addProductCart)
router.delete("/cart/:id", productsController.deleteProductCart);

/*** DDBB ***/


//detalle
router.get("/detail/:id", productsController.detalle);

//actualización
//router.get("/edit/:id", productsController.editar);
//router.put("/edit/:id", productsController.actualizar); 

//borrado
//router.delete("/delete/:id", productsController.borrar);


module.exports = router;
