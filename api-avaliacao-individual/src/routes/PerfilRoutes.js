const express = require("express");
const router = express.Router();
const perfilController = require("../controllers/PerfilController.js");

router.get("/", perfilController.obterTodosPerfis);
router.post("/", perfilController.criarPerfil);
router.delete("/:id", perfilController.deletarPerfil);
router.put("/:id", perfilController.editarPerfil);

module.exports = router;