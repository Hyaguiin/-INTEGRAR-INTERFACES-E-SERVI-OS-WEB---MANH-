const Aluno = require("../models/Aluno"); 

const criarAluno = async (req, res) => {
  const { nome, idade } = req.body;
  try {
    const novoAluno = new Aluno({
      nome,
      idade,
    });

    await novoAluno.save();

    res.json({
      message: "Aluno criado com sucesso!",
      aluno: novoAluno,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: err.message + ` Não foi possível criar o aluno` }); //p err serv.
  }
};

const obterTodosAlunos = async (req, res) => {
  try {
    const alunos = await Aluno.find().populate("perfil");
    res.json(alunos);
  } catch (err) {
    res
      .status(404)
      .json({
        message: err.message + ` Não foi possível obter todos os alunos!`,
      });
  }
};

const deletarAluno = async (req, res) => {
  const { id } = req.params;
  try {
    await Aluno.deleteOne({ _id: id });
    res.json({ message: "Aluno removido com sucesso!" });
  } catch (err) {
    res
      .status(404)
      .json({ message: err.message + ` Não foi possível remover o aluno!` });
  }
};

const editarAluno = async (req, res) => {
  const { id } = req.params;
  const { nome, idade } = req.body;
  try {
    let aluno = await Aluno.findByIdAndUpdate(id, { nome, idade });
    res.status(200).json({
      message: "Aluno atualizado com sucesso!",
      aluno,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: err.message + ` Não foi possível atualizar o aluno!` });
  }
};


module.exports = {
  criarAluno,
  obterTodosAlunos,
  deletarAluno,
  editarAluno,
};