const express = require("express");
const router = express.Router();
const professorController = require("../controllers/ProfessorController.js");
const authToken = require('../middleware/AuthMiddleware.js');


router.get("/", authToken, professorController.obterTodosProfessores);
router.post("/",  professorController.criarProfessor);
router.delete("/:id", authToken,  professorController.deletarProfessor);
router.put("/:id", authToken,  professorController.editarProfessor);

module.exports = router;