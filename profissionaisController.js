const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, '../../data/profissionais.json');

function lerDados() {
  const data = fs.readFileSync(caminho);
  return JSON.parse(data);
}

exports.listar = (req, res) => {
  const { especialidade } = req.query;
  let profissionais = lerDados();

  if (especialidade) {
    profissionais = profissionais.filter(p =>
      p.especialidade.toLowerCase() === especialidade.toLowerCase()
    );
  }

  res.json(profissionais);
};

exports.buscar = (req, res) => {
  const { nome } = req.query;
  let profissionais = lerDados();

  if (nome) {
    profissionais = profissionais.filter(p =>
      p.nome.toLowerCase().includes(nome.toLowerCase())
    );
  }

  res.json(profissionais);
};