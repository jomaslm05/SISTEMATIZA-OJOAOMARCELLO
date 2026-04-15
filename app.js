const express = require('express');
const app = express();

const profissionaisRoutes = require('./routes/profissionaisRoutes');

app.use(express.json());
app.use('/profissionais', profissionaisRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});