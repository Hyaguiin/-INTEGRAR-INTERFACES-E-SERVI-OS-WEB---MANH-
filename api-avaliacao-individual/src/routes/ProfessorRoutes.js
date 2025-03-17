const express = require("express");
const router = express.Router();
const professorController = require("../controllers/professorController.js");
const authToken = require('../middleware/authMiddleware');


router.get("/", authToken, professorController.obterTodosProfessores);
router.post("/", authToken,  professorController.criarProfessor);
router.delete("/:id", authToken,  professorController.deletarProfessor);
router.put("/:id", authToken,  professorController.editarProfessor);

module.exports = router;