const express = require("express");
const bodyParser = require("body-parser");
const dbConnect = require("../database/db");
const cors = require("cors");
const aluno = require("../routes/AlunoRoutes");
const disciplina = require("../routes/DisciplinaRoutes");
const perfil = require("../routes/PerfilRoutes");
const professor = require("../routes/ProfessorRoutes");
const tarefa = require("../routes/TarefaRoutes");
const turma = require("../routes/TurmaRoutes");
const authToken = require('../middleware/authMiddleware');

const app = express();
app.use(bodyParser.json());
app.use(cors("*"));
dbConnect();
app.use("/aluno", aluno);

app.use("/disciplina", disciplina);

app.use("/perfil", perfil);

app.use("/professor", professor);

app.use("/tarefa", tarefa);

app.use("/turma", turma);

PORT = process.env.PORT;

app.get("/", (req, res) => {
  try {
    console.log(" Deu filé a conexão com o BD");
  } catch (err) {
    throw new errors.UnexpectedError(err);
  }
});

module.exports = app;
