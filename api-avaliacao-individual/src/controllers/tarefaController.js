const Tarefa = require("../models/Tarefa");
 const criarTarefa = async (req, res) => {
  const { titulo, alunoId, disciplinasIds } = req.body;
  const concluida = false;

  try {
    const novaTarefa = new Tarefa({
      titulo,
      aluno: alunoId,
      concluida,
      disciplinas: disciplinasIds,
    });

    await novaTarefa.save();

    res.json({
      message: "Tarefa criada com sucesso!",
      tarefa: novaTarefa,
    });
  } catch (err) {
    res.status(500).json({ message: err.message + ` Não foi possível criar a tarefa` });
  }
};

 const obterTodasTarefas = async (req, res) => {
  try {
    const tarefas = await Tarefa.find().populate("aluno").populate("disciplinas");
    res.json(tarefas);
  } catch (err) {
    res.status(404).json({ message: err.message + ` Não foi possível obter todas as tarefas` });
  }
};

 const deletarTarefa = async (req, res) => {
  const { id } = req.params;

  try {
    await Tarefa.deleteOne({ _id: id });
    res.json({ message: "Tarefa removida com sucesso!" });
  } catch (err) {
    res.status(500).json({ message: err.message + ` Não foi possível remover a tarefa` });
  }
};

 const editarTarefa = async (req, res) => {
  const { id } = req.params;
  const { titulo, concluida } = req.body;

  try {
    let tarefa = await Tarefa.findByIdAndUpdate(id, { titulo, concluida });
    res.status(200).json({
      message: "Tarefa atualizada com sucesso!",
      tarefa,
    });
  } catch (err) {
    res.status(500).json({ message: err.message + ` Não foi possível atualizar a tarefa` });
  }
};

module.exports = {
  criarTarefa,
  obterTodasTarefas,
  deletarTarefa,
  editarTarefa,
};