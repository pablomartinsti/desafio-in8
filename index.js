import app from './src/app.js';  // Importa o arquivo app.js

// Define a porta em que o servidor vai rodar
const port = process.env.PORT || 3000;

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
