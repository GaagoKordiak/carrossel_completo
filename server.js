const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors()); // liberar acesso do frontend

const professores = [
  {
    id: 1,
    nome: "Carolina Paula de Almeida",
    foto: "CAROLINA-PAULA-DE-ALMEIDA.jpg",
    disciplina: "Projeto Integrador"
  },
  {
    id: 2,
    nome: "Yorranan Neves de Almeida Costa",
    foto: "YORRANAN_NEVES_DE_ALMEIDA_COSTA.jpg",
    disciplina: "Desenvolvimento web"
  },
  {
    id: 3,
    nome: "Jotair Elio Junior",
    foto: "JOTAIR-ELIO-KWIATKOWSKI-JUNIOR-2.jpg",
    disciplina: "Programação"
  },
  {
    id: 4,
    nome: "Richard Aderbal Gonçalves",
    foto: "RICHARD-ADERBAL-GONCALVES.jpg",
    disciplina: "Banco de Dados"
  }
];

app.get('/api/professores', (req, res) => {
  res.json(professores);
});

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
