import express from 'express';
import laptopRoutes from './routes/laptopRoutes.js';  // Importando as rotas

// Criação da instância do Express
const app = express();

// Middleware para entender JSON no corpo das requisições
app.use(express.json());

// Definir as rotas da aplicação
app.use('/api', laptopRoutes);  // Prefixa todas as rotas de laptops com "/api"

export default app;
